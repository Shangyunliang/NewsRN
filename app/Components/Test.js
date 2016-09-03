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

// Inside of a component's render() method:
class Test extends React.Component {

      render() {
        return (
          <ParallaxScrollView
            backgroundColor="blue"
            contentBackgroundColor="pink"
            parallaxHeaderHeight={300}
            renderForeground={() => (
             <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Hello World!</Text>
              </View>
            )}>
            <View style={{ height: 500 }}>
              <Text>Scroll me</Text>
            </View>
          </ParallaxScrollView>
        );
      }
}

export { Test as default };
