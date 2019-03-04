import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

class MyAccount extends Component {
  render() {
    return (
      <View>
        <Text style={{
          marginLeft: -100,
          color: '#ffffff',
          fontSize: 17,
          justifyContent: 'flex-start',
          flexDirection: 'row',
        }}>
          My Account
        </Text>
      </View>
    );
  }
}

class AccountTabNavigator extends Component {
  static navigationOptions = {
    headerTitle: <MyAccount/>,
  };
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

const StackNavigator = createStackNavigator(
  {
    AccountTabNavigator: {
      screen: AccountTabNavigator
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#3385ff',
      },
    }
  }
);

const style = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: 'rgb(240, 240, 245)',
  },
  StatusBar: {
    backgroundColor: '#3385ff',
  }
});

export default createAppContainer(StackNavigator);