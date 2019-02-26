import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {sanFranciscoWeights} from 'react-native-typography';

class LoadingScreen extends Component {
  render() {
    return (
      <View style={style.view}>
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
  }
});
export default LoadingScreen;