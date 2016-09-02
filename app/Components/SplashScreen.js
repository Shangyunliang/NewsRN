/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @Shangyunliang
 */


'use strict';

import React, {Component} from 'react';
import {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
} from 'react-native';

var WINDOW_WIDTH = Dimensions.get('window').width;

class SplashScreen extends React.Component({


  constructor() {

    this.state = {
        bounceValue: new Animated.Value(1)
    };

  }

  componentDidMount: function() {
    this.state.bounceValue.setValue(1);
    Animated.timing(
      this.state.bounceValue,
      {
        toValue: 1.2,
        duration: 5000,
      }
    ).start();
  },

  render: function() {
    return(
      <View style={styles.container}>
        <Animated.Image
          source={img}
          style={{
            flex: 1,
            width: WINDOW_WIDTH,
            height: 1,
            transform: [
              {scale: this.state.bounceValue},
            ]
          }} />
        <Text style={styles.text}>
            {text}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  cover: {
    flex: 1,
    width: 200,
    height: 1,
  },
  logo: {
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30,
    height: 54,
    backgroundColor: 'transparent',
  },
  text: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    backgroundColor: 'transparent',
  }
});

module.exports = SplashScreen;
