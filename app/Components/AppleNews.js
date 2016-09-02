    /**
     * Sample React Native App
     * https://github.com/facebook/react-native
     * @flow
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

    class AppleNews extends React.Component {
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
               return <NewsList navigator={nav} urldes='http://apis.baidu.com/txapi/apple/apple'
                 backgroundco='rgba(236,110,116,1)'/>;
             case 'detail':
               return (<NewsDetail navigator={nav} title="Detail"  url={route.url}/>);
           }
       }

    };

    export { AppleNews as default };
