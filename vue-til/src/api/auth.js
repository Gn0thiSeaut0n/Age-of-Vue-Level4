import { instance } from '@/api/index';
// 로그인, 회원 가입, (ex)회원 탈퇴
// 회원가입 API
const registerUser = userData => {
  return instance.post('signup', userData);
};

// 로그인 API
const loginUser = userData => {
  return instance.post('login', userData);
};

export { registerUser, loginUser };
