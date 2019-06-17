import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: deviceHeight / 2.8
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10
  }
});
