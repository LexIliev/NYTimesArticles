import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

const Article = ({
  title,
  byline,
  publishedDate,
  media,
  handleOnPress
}) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>
      <View style={styles.articleImageWrapper}>
        <Image
          style={styles.articleImage}
          source={{
            uri: media[0]['media-metadata'][0].url
          }}
        />
        <View style={styles.articleTextWrapper}>
          <Text
            style={[styles.text, styles.articleTitle]}
            numberOfLines={2}
          >
            {title !== '' ? title : ' - '}
          </Text>
          <View style={styles.articleInfoWrapper}>
            <Text style={[styles.text, styles.articleByline]}>
              {byline !== '' ? byline : 'By -'}
            </Text>
            <Text style={[styles.text, styles.articlePublishedDate]}>
              {publishedDate !== '' ? publishedDate : 'N/A'}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={handleOnPress}>
          <Icon name="chevron-right" size={22} color="#000" />
        </TouchableOpacity>
      </View>
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
