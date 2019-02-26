import React, {Component} from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrderTabNavigator from './OrderTabNavigator';
import AccountTabNavigator from './AccountTabNavigator';
import NewTabNavigator from './NewTabNavigator';
import StoreTabNavigator from './StoreTabNavigator';

const BottomTabNavigator = createBottomTabNavigator(
  {
    New: {
      screen: NewTabNavigator
    },
    Store: {
      screen: StoreTabNavigator
    },
    Order: {
      screen: OrderTabNavigator
    },
    Account: {
      screen: AccountTabNavigator
    }
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        switch (routeName) {
          case 'New': {
            iconName = 'ios-paper';
            break;
          }
          case 'Store': {
            iconName = 'ios-cart';
            break;
          }
          case 'Order': {
            iconName = 'ios-clipboard';
            break;
          }
          case 'Account': {
            iconName = 'ios-person';
            break;
          }
        }
        return <Ionicons name={iconName} size={25} color={tintColor}/>;
      }
    })
  }
);

export default createAppContainer(BottomTabNavigator);