import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';

import { Article } from '../index';

const ArticlesList = props => (
  <View>
    <FlatList
      data={props.data}
      showsVerticalScrollIndicator={false}
      // onRefresh={() => {}}
      // refreshing={}
      renderItem={({ item }) => (
        <Article
          key={item.id}
          title={item.title}
          byline={item.byline}
          publishedDate={item.published_date}
          media={item.media}
          handleOnPress={
            () => props.navigation.navigate('Details', { id: item.id })
          }
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  </View>
);

ArticlesList.propTypes = {
  data: PropTypes.array.isRequired
};

export default ArticlesList;
