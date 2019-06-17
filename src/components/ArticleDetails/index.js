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
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.abstract}>{abstract}</Text>
      <Image
        style={[styles.articleDetailsImage, { height: articleImage.height }]}
        source={{
          uri: articleImage.url
        }}
      />
      <View>
        <Text style={styles.text}>{byline}</Text>
        <Text style={styles.text}>{published_date}</Text>
      </View>
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
