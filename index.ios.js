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

import News from './app/Components/News';

class RNRC extends React.Component {

                render() {
                      return (
                        <News />
                      );
              }
}

AppRegistry.registerComponent('RNRC', () => RNRC);
