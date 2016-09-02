// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
//  var React = require('react');
//  import {
//    View,
//    Text,
//    StyleSheet,
//    AppRegistry,
//    TouchableHighlight,
//    Navigator,
//    TouchableOpacity,
//    Image,
//  } from 'react-native';
//
// import SportNews from './SportNews';
// import SocialNews from './SocialNews';
//
//  var NavigationBarRouteMapper = {
//    LeftButton: function(route, navigator, index, navState) {
//      if (route.id === 'main') {
//        return null;
//      }
//      var previousRoute = navState.routeStack[index - 1];
//      return (
//        <TouchableOpacity
//          onPress={() => navigator.pop()}
//          style={styles.navBarLeftButton}>
//          {/* <Image source={require('./back.png')} style={styles.backImage}>
//          </Image> */}
//        </TouchableOpacity>
//      );
//    },
//    RightButton: function(route, navigator, index, navState) {
//      if (route.id === 'detail') {
//        return null;
//      }
//      return (
//        <TouchableOpacity
//          onPress={() => navigator.push({id:'detail',title:'Detail'})}
//          style={styles.navBarRightButton}>
//          <Text style={[styles.navBarText, styles.navBarButtonText]}>
//            Next
//          </Text>
//        </TouchableOpacity>
//      );
//    },
//
//    Title: function(route, navigator, index, navState) {
//      return (
//        <Text style={[styles.navBarText, styles.navBarTitleText]}>
//          {route.title}
//        </Text>
//      );
//    },
//  };
//
//  var ListNav  = React.createClass({
//     render(){
//       return (
//         <Navigator
//           style = {styles.container}
//           initialRoute={{id:"main",title:"Main"}}
//           renderScene={this.renderNav}
//           configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump}
//           navigationBar={
//             <Navigator.NavigationBar
//               routeMapper={NavigationBarRouteMapper}
//               style={styles.navBar}
//            />
//           }
//           />
//       );
//     },
//     renderNav(route,nav){
//         switch (route.id) {
//           case 'main':
//             return <SocialNews navigator={nav} title="Main"/>;
//           case 'detail':
//             return (<SportNews navigator={nav} title="Detail" data={route.data}/>);
//         }
//     }
//  });
//
//  var MainScreen = React.createClass({
//    toDetail(){
//      this.props.navigator.push({id:"detail",title:"Detail",data:"Passed from Main screen"});
//   },
//    render(){
//      return (
//        <View style={styles.containView}>
//          <TouchableHighlight
//           style={styles.button}
//           onPress={this.toDetail}
//           underlayColor="#B5B5B5">
//             <Text style={styles.blackText}>=>详情页</Text>
//          </TouchableHighlight>
//        </View>
//      );
//    }
//  });
//  var DetailScreen = React.createClass({
//    toMain(){
//      this.props.navigator.pop();
//    },
//    render(){
//      return (
//        <View style={styles.detailContainView}>
//          <TouchableHighlight
//           style={styles.button}
//           onPress={this.toMain}
//           underlayColor="green">
//             <Text style={styles.blackText}>{this.props.data}</Text>
//          </TouchableHighlight>
//        </View>
//      );
//    }
//  });
//
//  const styles = StyleSheet.create({
//    backImage:{
//      width:13,
//      height:26,
//    },
//    container: {
//      flex: 1,
//    },
//    navBar: {
//      backgroundColor: 'white',
//    },
//    button: {
//      padding: 15,
//    },
//    containView:{
//      flex: 1,
//      backgroundColor:'gray',
//      justifyContent: 'center',
//    },
//    detailContainView:{
//      flex:1,
//      justifyContent: 'center',
//      backgroundColor:'green',
//    },
//    blackText:{
//      fontSize:20,
//      textAlign:'center',
//    },
//    navBar: {
//     backgroundColor: 'white',
//    },
//   navBarText: {
//     fontSize: 16,
//     marginVertical: 10,
//   },
//   navBarTitleText: {
//     color: '#373E4D',
//     fontWeight: '500',
//     marginVertical: 9,
//   },
//   navBarLeftButton: {
//     paddingLeft: 10,
//     paddingTop:6,
//   },
//   navBarRightButton: {
//     paddingRight: 10,
//   },
//   navBarButtonText: {
//     color: '#5890FF',
//   },
//  });
//
//  export { ListNav as default };
