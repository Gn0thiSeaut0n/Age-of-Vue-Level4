import store from '@/store/index';
export const setInterceptors = instance => {
  instance.interceptors.request.use(
    config => {
      config.headers.Authorization = store.state.token;
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    },
  );
  return instance;
};
