import React from 'react';
import { View } from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

import { CustomHeader } from '../components';
import { ArticlesScreen, ArticleDetailsScreen } from '../screens';

import styles from './navigatorStyles';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: ArticlesScreen
    },
    Details: {
      screen: ArticleDetailsScreen
    }
  },
  {
    initialRouteName: 'Home',
    cardStyle: {
      backgroundColor: '#fff'
    },
    headerMode: 'screen',
    defaultNavigationOptions: {
      title: 'NY Times Most Popular',
      header: props => <CustomHeader {...props} />,
      headerTintColor: '#fff',
      headerLeft: (
        <Icon
          name="menu"
          size={22}
          color="#fff"
          style={styles.buttonPadding}
        />
      ),
      headerRight: (
        <View style={styles.headerRight}>
          <Icon
            name="search"
            size={22}
            color="#fff"
            style={styles.buttonPadding}
          />
          <Icon
            name="more-vertical"
            size={22}
            color="#fff"
            style={styles.buttonPadding}
          />
        </View>
      ),
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle
    }
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Main: MainNavigator
  },
  {
    initialRouteName: 'Main'
  }
);

export default createAppContainer(SwitchNavigator);
