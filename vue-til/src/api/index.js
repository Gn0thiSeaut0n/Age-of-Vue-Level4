import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

// 엑시오스 초기화 함수
const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
};

const instance = createInstance();

// 회원가입 API
const registerUser = userData => {
  return instance.post('signup', userData);
};

// 로그인 API
const loginUser = userData => {
  return instance.post('login', userData);
};

// 학습 노트 데이터를 조회하는 API
const fetchPosts = () => {
  return instance.get('posts');
};

export { registerUser, loginUser, fetchPosts };
