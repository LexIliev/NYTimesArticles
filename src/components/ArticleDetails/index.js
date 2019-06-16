import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const ArticleDetails = ({
  title,
  abstract,
  byline,
  published_date,
  media
}) => {
  const articleImage = media[0]['media-metadata'][2];

  return (
    <View>
      <Text>{title}</Text>
      <Text>{abstract}</Text>
      <Text>{byline}</Text>
      <Text>{published_date}</Text>
      <Image
        style={
          [
            styles.articleDetailsImage,
            { height: articleImage.height }
          ]
        }
        source={{
          uri: articleImage.url
        }}
      />
    </View>
  );
};

ArticleDetails.propTypes = {
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired,
  published_date: PropTypes.string.isRequired,
  media: PropTypes.array.isRequired
};

export default ArticleDetails;
