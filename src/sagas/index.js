import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchArticlesList } from '../services';
import { FETCH_ARTICLES_LIST } from '../actions/actionTypes';
import { fetchArticlesListSuccess, fetchArticlesListFail } from '../actions';

export const getArticlesList = function*() {
  try {
    const data = yield call(fetchArticlesList);
    yield put(fetchArticlesListSuccess(data.results));
  } catch (error) {
    yield put(fetchArticlesListFail(error));
  }
};

export default function*() {
  yield takeLatest(FETCH_ARTICLES_LIST, getArticlesList);
}
