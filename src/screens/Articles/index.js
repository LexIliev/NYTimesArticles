import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';

import { ArticlesList, Loader } from '../../components';
import { fetchArticlesList } from '../../actions';

// TODO: Add pull to refresh
class ArticlesScreen extends Component {
  componentDidMount() {
    this.props.fetchArticlesList();
  }

  render() {
    const { articles, navigation } = this.props;
    const containerStyles = Platform.OS === 'ios' ? { marginTop: 32 } : { marginTop: 0 };

    if (!articles.length) {
      return <Loader />;
    }

    return (
      <View style={containerStyles}>
        <ArticlesList data={articles} navigation={navigation} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.data
});

export default connect(
  mapStateToProps,
  { fetchArticlesList }
)(ArticlesScreen);
