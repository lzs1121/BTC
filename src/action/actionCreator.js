import { 
  LOAD_USER,
  LOAD_ALL_COMMENTS,
  LOAD_POST_DETAIL,
  LOAD_ALL_POSTS,
  ADD_POST
} from './actionType';
import {
  getUser,
  getPosts,
  getPost,
  getComments,
  addPost
} from '../service/fetchData'

export const getUserInfo = (id) => async dispatch => {
  try {
    const res = await getUser(id);
    dispatch({
      type: LOAD_USER,
      payload: res.data
    })
  } catch (error) {
    console.log("It cannot load the data.", error)
  }
}

export const addPostInfo = (data) => async dispatch => {
  try {
    const res = await addPost(data);
    dispatch({
      type: ADD_POST,
      payload: res.data
    })
  } catch (error) {
    console.log("It cannot load the data.", error)
  }
}

export const getPostsInfo = (id) => async dispatch => {
  try {
    const res = await getPosts(id);
    dispatch({
      type: LOAD_ALL_POSTS,
      payload: res.data
    })
  } catch (error) {
    console.log("It cannot load the data.", error)
  }
}

export const getPostInfo = (id) => async dispatch => {
  try {
    const res = await getPost(id);
    dispatch({
      type: LOAD_POST_DETAIL,
      payload: res.data
    })
  } catch (error) {
    console.log("It cannot load the data.", error)
  }
}

export const getCommentsInfo = (id) => async dispatch => {
  try {
    const res = await getComments(id);
    dispatch({
      type: LOAD_ALL_COMMENTS,
      payload: res.data
    })
  } catch (error) {
    console.log("It cannot load the data.", error)
  }
}
