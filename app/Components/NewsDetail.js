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

import NewsList from './NewsList';

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


class NewsDetail extends React.Component {

  goBack() {
    if (this.props.navigator) {
       this.props.navigator.pop()
    }
  }

   render(){
     return (
      <View style={styles.container}>
          <WebView startInLoadingState={true}
                   javaScriptEnabled={true}
                   source={{uri:this.props.url,method:'GET'}}
                   style={{flex:1}}/>
        <TouchableHighlight
        underlayColor="rgba(34,26,38,0.1)"
        onPress={()=> this.goBack()}>
        <View style={{margin:5,justifyContent:'center',alignItems:'center',height:40}}>
                         <Text>返回上一页</Text>
        </View>
         </TouchableHighlight>
      </View>

     );
   }
};


export { NewsDetail as default };
