/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @Shangyunliang
 */

import React, { Component } from 'react';
import styles from '../Styles/mainstyles';
import {
  Text,
  View,
  ListView,
  Image,
  ActivityIndicator,
  TouchableHighlight,
  Navigator,
  Dimensions,
} from 'react-native';


class NewsList extends React.Component {

  constructor(props){

    super(props);

    this.state = {
          news: [],
          count: 10,
          start: 1,
          total: 20,
          loaded: false,
    };

    this.dataSource = new ListView.DataSource({
        rowHasChanged:(row1,row2) => row1 !== row2
    });

    this.REQUERST_URL = this.props.urldes;

    this.fetchData();

  }

  requestURL(url = this.REQUERST_URL,count = this.state.count,start = this.state.start,){

        return (`${url}?num=${count}&page=${start}`);

  }

  fetchData(){

          fetch(this.requestURL(), {
                headers: {
                  "apikey": "7749320ce3ef8b50df0046fcb7551d58"
                }
          })
          .then(response => response.json())
          .then(responseData => {
              console.log(responseData);
              let newStart = this.state.start + 1;
              this.setState({
                news: responseData.newslist,
                loaded: true,
                start: newStart,
              });
          })
          .done();
  }

  showNewsDetail(news){
    console.log(news.url);
      if (this.props.navigator) {
          this.props.navigator.push({
            id: 'detail',
            title: 'webview',
            url: news.url,
          });
      }
  }

  renderNewsList(news){

          if (!news.picUrl) {
              news.picUrl = 'http://img1.cache.netease.com/house/2015/12/25/20151225162305790e7.jpg';
          }

          return(

                <TouchableHighlight
                underlayColor="rgba(34,26,38,0.1)"
                onPress={() => this.showNewsDetail(news)}
                >
                  <View style={styles.item}>
                    <View style={styles.itemImage}>
                      <Image
                      source={{uri: news.picUrl}}
                      style={styles.image}
                      />
                    </View>
                    <View style={styles.itemContent}>
                      <Text style={styles.itemHeader}>{news.title}</Text>
                      <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end',marginRight:12}}>
                        <Text style={styles.redText}>{news.description}</Text>
                        <Text style={styles.itemMeta}>
                            {news.ctime}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableHighlight>
          );

}

  loadMore() {
      fetch(this.requestURL(), {
            headers: {
              "apikey": "7749320ce3ef8b50df0046fcb7551d58"
            }
      })
      .then(response => response.json())
      .then(responseData => {
          let newStart = this.state.start + 1;
          this.setState({
            news: [...this.state.news,...responseData.newslist],
            start: newStart,
          });
      })
      .done();
    }

  onEndReached() {
      console.log(
        `到底了！开始：${this.state.start},总共:${this.state.total}页`
      );
      if (this.state.total > this.state.start) {
        this.loadMore();
      }
  }


  renderFooter() {
          if (this.state.total > this.state.start) {
              return(
                <View
                style = {{
                  marginVertical: 20,
                  paddingBottom: 50,
                  alignSelf: 'center',
                }}>
                  <ActivityIndicator/>
                </View>
              );
          }else {
            return(
              <View
              style = {{
                marginVertical: 20,
                paddingBottom: 50,
                alignSelf: 'center',
              }}>
                <Text
                style= {{color: 'rgba(0,0,0,0.3)'}}
                >❌没有显示的内容了</Text>
              </View>
            );
        }
  }


  render(){
            if (!this.state.loaded){
               return(
                 <View style = {styles.container}>
                   <View style = {styles.loading}>
                     <ActivityIndicator size="large" color="#6435c9"/>
                   </View>
                 </View>
               );
             }

              return (
                //如果这里不使用中括号，会导致不停的触发到底方法。
                <View style={[styles.container,{backgroundColor:this.props.backgroundco}]}>
                <ListView
                enableEmptySections
                renderFooter={this.renderFooter.bind(this)}
                pageSize={this.state.count}
                onEndReached = {this.onEndReached.bind(this)}
                initialListSize = {this.state.count}
                dataSource = {this.dataSource.cloneWithRows(this.state.news)}
                renderRow = {this.renderNewsList.bind(this)}/>
                </View>
              );
  }

}

export { NewsList as default };
