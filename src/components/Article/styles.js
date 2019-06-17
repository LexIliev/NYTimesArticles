import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'column'
  },
  wrapper: {
    flexDirection: 'row',
    flex: 1,
    flexGrow: 1
  },
  articleImageWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  articleImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    alignSelf: 'center'
  },
  articleTextWrapper: {
    flex: 1
  },
  articleTitle: {
    width: '99%',
    paddingBottom: 20,
    color: '#000'
  },
  text: {
    fontSize: 12,
    flex: 1,
    flexDirection: 'row',
    color: '#7c7c7c'
  },
  articleInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignContent: 'space-between'
  },
  articleByline: {
    justifyContent: 'flex-start',
    flex: 1
  },
  articlePublishedDate: {
    textAlign: 'right',
    flexGrow: 0.5
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
