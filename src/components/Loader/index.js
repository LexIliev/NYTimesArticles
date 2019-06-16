import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from './styles';

const Loader = ({ loaderText }) => (
  <View style={styles.container}>
    <ActivityIndicator size="small" color="#00ff00" />
    <Text>{loaderText}</Text>
  </View>
);

Loader.defaultProps = {
  loaderText: 'Loading...'
};

Loader.propTypes = {
  loaderText: PropTypes.string
};

export default Loader;
