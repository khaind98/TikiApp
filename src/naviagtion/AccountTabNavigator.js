import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

class MyAccount extends Component {
  render() {
    return (
      <Text style={{marginLeft: -100, color:'#ffffff', fontSize: 17,justifyContent: 'flex-start',flexDirection: 'row',}}>
        My Account
      </Text>
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


});

export default createAppContainer(StackNavigator);