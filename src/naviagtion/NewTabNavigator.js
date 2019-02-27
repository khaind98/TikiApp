import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class NewTabNavigator extends Component {
  render() {
    return (
      <View style={style.View}>
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
});

export default NewTabNavigator;