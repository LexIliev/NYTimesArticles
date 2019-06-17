import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 50 : 10
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  abstract: {
    color: '#000'
  },
  articleDetailsImage: {
    width: Dimensions.get('window').width,
    marginVertical: 20
  },
  text: {
    color: '#7c7c7c',
    textAlign: 'center'
  }
});
