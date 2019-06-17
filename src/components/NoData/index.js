import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PTRView from 'react-native-pull-to-refresh';

import styles from './styles';

const NoData = ({ handleRefresh }) => (
  <PTRView onRefresh={handleRefresh}>
    <View style={styles.container}>
      <Icon name="cloud-off" size={82} color="#7ff2ce" />
      <Text style={styles.text}>
        {'Cannot retrieve data.\n Please, try again later.'}
      </Text>
    </View>
  </PTRView>
);

NoData.propTypes = {
  handleRefresh: PropTypes.func
};

export default NoData;
