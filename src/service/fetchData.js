import request from '../utils/request'

export const getPosts = (id) => {
  return request({
    url: '/posts',
    method: 'GET',
    params: {
      userId: id
    }
  })
};

export const getPost = (id) => {
  return request({
    url: `/post/${id}`,
    method: 'GET'
  })
}

export const addPost = (data) => {
  return request({
    url: '/posts',
    method: 'POST',
    data: {
      title: data.title,
      body: data.body,
      userId: data.userId
    }
  })
}

export const getComments = (id) => {
  return request({
    url: `/comments`,
    method: 'GET',
    params: {
      postId: id
    }
  })
}

export const getUser = (id) => {
  return request({
    url: `/users/${id}`,
    method: 'GET'
  })
}
