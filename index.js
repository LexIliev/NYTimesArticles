import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './src/navigators';
import store from './src/store';
import { name as appName } from './app.json';

const App = () => (
  <Provider store={store}>
    <Navigator onNavigationStateChange={null} />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
