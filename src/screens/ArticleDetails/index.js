import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';

import { ArticleDetails, Loader } from '../../components';
import { fetchArticlesList } from '../../actions';

class ArticleDetailsScreen extends Component {
  componentDidMount() {
    if (!this.props.articles.length) {
      this.props.fetchArticlesList();
    }
  }

  render() {
    // Take the id from the navigator
    const { navigation, articles } = this.props;
    const { id } = navigation.state.params;
    const article = articles.length && articles.find(el => el.id === id);

    if (!article) {
      return <Loader />;
    }

    return (
      <View>
        <ArticleDetails key={id} {...article} />
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
)(ArticleDetailsScreen);
