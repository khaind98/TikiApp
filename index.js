/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import RootNavigation from './src/naviagtion/RootNavigation';

AppRegistry.registerComponent(appName, () => RootNavigation);
