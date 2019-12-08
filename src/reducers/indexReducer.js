import {
  LOAD_USER,
  LOAD_ALL_POSTS,
  LOAD_POST_DETAIL,
  LOAD_ALL_COMMENTS,
  ADD_POST
} from '../action/actionType';

const initialState = {
  userInfo: {},
  posts: [],
  post: {},
  comments: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, userInfo: payload };
    case LOAD_ALL_POSTS:
      return { ...state, posts: payload };
    case LOAD_POST_DETAIL:
      return { ...state, post: payload };
    case ADD_POST:
      return { ...state, post: payload };
    case LOAD_ALL_COMMENTS:
      return { ...state, comments: payload };
    default:
      return state;
  }
};