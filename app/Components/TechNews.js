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
    Navigator
  } from 'react-native';

  import NewsList from './NewsList';
  import NewsDetail from './NewsDetail';

  class TechNews extends React.Component {
     render(){
       return (
         <Navigator
           style = {styles.container}
           initialRoute={{id:"main"}}
           renderScene={(route, navigator) => this.renderPage(route,navigator)}
           configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump}
           />
       );
     }

     renderPage(route,nav){
         switch (route.id) {
           case 'main':
             return <NewsList navigator={nav} urldes='http://apis.baidu.com/txapi/keji/keji'
             backgroundco='rgba(255,205,147,1)'/>;
           case 'detail':
             return (<NewsDetail navigator={nav} title="Detail"  url={route.url}/>);
         }
     }
  };

  export { TechNews as default };
