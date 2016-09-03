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
  WebView,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

// class SocialNews extends React.Component {
//
//     render() {
//         return (
//                 <NewsList
//                 urldes='http://apis.baidu.com/txapi/social/social'
//                 backgroundco='rgba(241,141,0,1)'/>
//               );
//           }
// }

  const HEADER_HEIGHT = 290;
  const TITLE_HEIGHT = 55;


class Weather extends React.Component {

  constructor(props) {

      super(props);

      this.state = {

        weather:[],
        loaded:false,
        cityname:'北京',

      };

      this.REQUERST_URL = 'http://apis.baidu.com/apistore/weatherservice/cityname';

      this.fetchData();

  }

  requestURL(url = this.REQUERST_URL,cityname = this.state.cityname){
        console.log(`${url}?cityname=${cityname}`);
        return (`${url}?cityname=${cityname}`);

  }


  fetchData(){

          fetch(this.requestURL(), {
                headers: {
                  "apikey": "7749320ce3ef8b50df0046fcb7551d58"
                }
          })
          .then(response => response.json())
          .then(responseData => {
              console.log(responseData);;
              this.setState({
                weather: responseData.retData,
                loaded: true,
              });
          })
          .done();
  }


   render() {
     if (!this.state.loaded){
        return(
          <View style = {styles.container}>
            <View style = {styles.loading}>
              <ActivityIndicator size="large" color="#6435c9"/>
            </View>
          </View>
        );
      }
      else {
        return (
          <ParallaxScrollView
            backgroundColor='#589BC7'
            contentBackgroundColor='#F9F9F9'
            parallaxHeaderHeight={HEADER_HEIGHT}
            stickyHeaderHeight={TITLE_HEIGHT}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderStickyHeader={this.renderStickyHeader.bind(this)}
            renderBackground={this.renderBackground.bind(this)}
            renderForeground={this.renderForeground.bind(this)}>
            <View style={{ height: 500 }}>
              <Text>TODO.....</Text>
            </View>
          </ParallaxScrollView>
        );
      }
    }

//会动的头部
renderStickyHeader() {
    return(
      <View style={{backgroundColor:'rgba(0,0,0,0)',marginTop:20}}>
              <Text style={{fontSize:25,fontWeight:'800',color:'white',marginTop:4}}>{this.state.weather.city}</Text>
      </View>
    );
}

//背景
renderBackground() {
    return (
      <Image source={require('../Images/header-background.png')}/>
    );
};


//前景信息
renderForeground() {

  return(
    <View style={{flex:1}}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0)',marginTop:20}}>
              <Text style={{fontSize:25,fontWeight:'800',marginTop:4,color:'white'}}>{this.state.weather.city}</Text>
              <Text style={{fontSize:17,fontWeight:'800',textAlign:'center',color:'white',marginTop:4,marginBottom:4}}>{this.state.weather.weather}</Text>
      </View>
      <View style={{flex:1,flexDirection:'row',justifyContent:'center',backgroundColor:'rgba(0,0,0,0)',marginTop:-10}}>
                <View style={{flex:1,padding:2,justifyContent:'center',alignItems:'flex-end'}}>
                  <Image source={require('../Images/sunny.gif')} style={{height:80,width:80,resizeMode:'contain',padding:2}}/>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'flex-start',padding:2}}>
                  <Text  style={{fontSize:40,fontWeight:'400',textAlign:'center',color:'white'}}>{this.state.weather.h_tmp}</Text>
                  <Text  style={{fontSize:15,fontWeight:'200',textAlign:'center',color:'white'}}>{this.state.weather.l_tmp}</Text>
                </View>
      </View>
      <View style={{flex:1,flexDirection:'column',backgroundColor:'rgba(0,0,0,0)'}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                <Text style={{margin:5,color:'white'}}>Today:{this.state.weather.date} Time:{this.state.weather.time}</Text>
                <Text style={{margin:5,color:'white'}}>{this.state.weather.WS}</Text>
          </View>
      </View>
  </View>);
  };

};

export { Weather as default };

// retData
// :
// Object
// WD
// :
// "无持续风向"
// WS
// :
// "微风(<10m/h)"
// altitude
// :
// "33"
// city
// :
// "北京"
// citycode
// :
// "101010100"
// date
// :
// "16-09-03"
// h_tmp
// :
// "30"
// l_tmp
// :
// "20"
// latitude
// :
// 39.904
// longitude
// :
// 116.391
// pinyin
// :
// "beijing"
// postCode
// :
// "100000"
// sunrise
// :
// "05:44"
// sunset
// :
// "18:42"
// temp
// :
// "30"
// time
// :
// "08:00"
// weather
// :
// "晴"
