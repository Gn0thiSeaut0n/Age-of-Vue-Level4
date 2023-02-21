import { posts } from '@/api/index';
// 학습 노트 조작과 관련된 CRUD API 함수 파일
// 학습 노트 데이터 목록을 조회하는 API
const fetchPosts = () => {
  return posts.get('/');
};

// 특정 학습 노트를 조회하는 API
const fetchPost = postId => {
  return posts.get(postId);
};

// 학습 노트 데이터를 생성하는 API
const createPost = postData => {
  return posts.post('/', postData);
};

// 학습 노트 데이터를 삭제하는 API
const deletePost = postId => {
  return posts.delete(postId);
};

// 학습 노트 데이터를 수정하는 API
const editPost = (postId, postData) => {
  return posts.put(postId, postData);
};

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
