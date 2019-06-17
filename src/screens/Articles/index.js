import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';
import PTRView from 'react-native-pull-to-refresh';

import { ArticlesList, Loader, NoData } from '../../components';
import { fetchArticlesList } from '../../actions';

class ArticlesScreen extends Component {
  componentDidMount() {
    this.handleRefresh();
  }

  handleRefresh = () => {
    this.props.fetchArticlesList();
  };

  render() {
    const { articles, navigation } = this.props;
    const containerStyles = Platform.OS === 'ios' ? { marginTop: 42 } : { marginTop: 0 };

    if (articles === undefined) {
      return <NoData handleRefresh={this.handleRefresh} />;
    }

    if (!articles.length) {
      return <Loader />;
    }

    return (
      <PTRView onRefresh={this.handleRefresh}>
        <View style={containerStyles}>
          <ArticlesList data={articles} navigation={navigation} />
        </View>
      </PTRView>
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
