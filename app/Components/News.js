/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @Shangyunliang
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
} from 'react-native';

import ScrollableTabView,{ DefaultTabBar,ScrollableTabBar } from 'react-native-scrollable-tab-view';
import SocialNews from './SocialNews';
import TechNews from './TechNews';
import SportNews from './SportNews';
import InternationalNews from './InternationalNews';
import AppleNews from './AppleNews';
class News extends React.Component {

                render() {
                      return (
                      <ScrollableTabView
                      style = {{marginTop: 10}}
                      tabBarPosition='top'
                      locked={false} //如果被锁定只能点击标题切换，否则可以用手指滚动下面页面进行切换
                      initialPage={0}
                      contentProps= {{bounces: false}}
                      /**tabBarUnderlineColor(String)
                      设置DefaultTabBar和ScrollableTabBarTab选中时下方横线的颜色
                      tabBarBackgroundColor(String)
                      设置整个Tab这一栏的背景颜色
                      tabBarActiveTextColor(String)
                      设置选中Tab的文字颜色
                      tabBarInactiveTextColor(String)
                      设置未选中Tab的文字颜色
                      tabBarTextStyle(Object)
                      设置Tab文字的样式，比如字号、字体等
                      */
                      tabBarUnderlineColor='#FF0000'
                      tabBarBackgroundColor='#FFFFFF'
                      tabBarActiveTextColor='#9B30FF'
                      tabBarInactiveTextColor='#7A67EE'
                      // 设置“点击”Tab时，视图切换是否有动画，默认为false（即：有动画效果）
                      scrollWithoutAnimation={false}
                      onChangeTab={(obj) => {
                          console.log('index:' + obj.i);
                      }}
                      renderTabBar={() => <ScrollableTabBar />}>
                          <SocialNews tabLabel='社会'/>
                          <TechNews tabLabel='科技'/>
                          <SportNews tabLabel='体育'/>
                          <InternationalNews tabLabel='国际'/>
                          <AppleNews tabLabel='苹果'/>
                      </ScrollableTabView>
                      );
              }
}


export { News as default };
