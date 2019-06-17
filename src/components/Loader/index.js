import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from './styles';

const Loader = ({ loaderText }) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#7ff2ce" />
    <Text style={styles.text}>{loaderText}</Text>
  </View>
);

Loader.propTypes = {
  loaderText: PropTypes.string
};

export default Loader;
