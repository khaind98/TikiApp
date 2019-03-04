import React, {Component} from 'react';
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import LoadingScreen from "../component/LoadingScreen";
import MainTabNavigator from './MainTabNavigator';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    try {
      const userToken = await fetch('https://coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com/?id=lF-jPBnZ098');
      this.props.navigation.navigate('MainTabNavigator');
    }
    catch{
      this.props.navigation.navigate('MainTabNavigator');
    }
  };

  render() {
    return (
       <LoadingScreen/>
    );
  }
}

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoadingScreen: {
      screen: AuthLoadingScreen
    },
    MainTabNavigator: {
      screen: MainTabNavigator
    }
  },
  {
    initialRouteName: 'AuthLoadingScreen'
  }
);

export default createAppContainer(SwitchNavigator)