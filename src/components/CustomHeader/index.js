import React from 'react';
import { Header } from 'react-navigation';
import { View } from 'react-native';

import styles from './styles';

const CustomHeader = props => (
  <View style={styles.container}>
    <Header {...props} />
  </View>
);

export default CustomHeader;
