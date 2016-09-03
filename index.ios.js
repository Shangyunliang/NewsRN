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
  Image,
} from 'react-native';
import styles from './app/Styles/mainstyles';
import News from './app/Components/News';
import Weather from './app/Components/Weather';
import Test from './app/Components/Test';
import TabNavigator from 'react-native-tab-navigator';

const NEWS = 'NEWS';
const NEWS_NORMAL = require('./app/Images/news.png');
const NEWS_FOUSE = require('./app/Images/news.png');
const WEATHER = 'WEATHER';
const WEATEHR_NORMAL = require('./app/Images/weather.png');
const WEATEHR_FOUSE = require('./app/Images/weather.png');


class RNRC extends React.Component {

              constructor(props) {
                  super(props);
                  this.state = {selectedTab: NEWS}
              }

                renderTabItem(img, selectedImg, tag, childView) {
                    return (
                          <TabNavigator.Item
                              selected={this.state.selectedTab === tag}
                              renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                              renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                              onPress={() => this.setState({ selectedTab: tag })}>
                              {childView}
                          </TabNavigator.Item>
                        );
                }

                render() {
                      return (
                        <View style={{flex: 1}}>
                          <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                              {this.renderTabItem(NEWS_NORMAL, NEWS_FOUSE, NEWS, <News />)}
                              {this.renderTabItem(WEATEHR_NORMAL, WEATEHR_FOUSE, WEATHER, <Weather />)}
                          </TabNavigator>
                      </View>
                      );
              }
}

AppRegistry.registerComponent('RNRC', () => RNRC);
