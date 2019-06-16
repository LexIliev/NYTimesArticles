import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

// TODO: Add Empty screen
const Article = ({ title, byline, publishedDate, media, handleOnPress }) => (
  <View>
    <View>
      <Image
        style={styles.articleImage}
        source={{
          uri: media[0]['media-metadata'][0].url
        }}
      />
      <View>
        <Text>{title !== '' ? title : ' - '}</Text>
        <View>
          <Text>{byline !== '' ? byline : 'By -'}</Text>
          <Text>{publishedDate !== '' ? publishedDate : 'N/A'}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleOnPress}>
        <Icon name="chevron-right" size={22} color="#000" />
      </TouchableOpacity>
    </View>
  </View>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  media: PropTypes.array.isRequired,
  handleOnPress: PropTypes.func
};

export default Article;
