import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  StatusBar, Platform
} from 'react-native';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[style.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBar.currentHeight;

class NewTabNavigator extends Component {
  render() {
    return (
      <View style={style.View}>
        <MyStatusBar
          backgroundColor="#3385ff"
          barStyle="light-content"
        />
        <View>
        </View>
        <View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: 'rgb(240, 240, 245)',
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  }
});

export default NewTabNavigator;