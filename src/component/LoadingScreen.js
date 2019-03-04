import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet, StatusBar, Platform
} from 'react-native';
import {sanFranciscoWeights} from 'react-native-typography';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[style.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

class LoadingScreen extends Component {
  render() {
    return (
      <View style={style.view}>
        <MyStatusBar backgroundColor="#33adff" barStyle="light-content" />
        <Text
          style={
            [sanFranciscoWeights.bold,
              style.text]}
        >
          Tiki
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#33adff'
  },
  text: {
    textAlign: 'center',
    marginTop: 380,
    marginBottom: 380,
    marginLeft: 50,
    marginRight: 50,
    color: '#ffffff',
    fontSize: 25,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  }
});
export default LoadingScreen;