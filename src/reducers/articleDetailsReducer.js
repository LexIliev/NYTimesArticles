import {
  FETCH_ARTICLE_DETAILS,
  FETCH_ARTICLE_DETAILS_SUCCESS,
  FETCH_ARTICLE_DETAILS_FAIL
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLE_DETAILS:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_ARTICLE_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
        // data: action.data[0]
      };
    case FETCH_ARTICLE_DETAILS_FAIL:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: action.error
      };
    default:
      return state;
  }
}
