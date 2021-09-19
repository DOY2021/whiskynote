import axios, { AxiosResponse } from 'axios';

const END_POINT = process.env.NODE_ENV?.includes('dev') ?  'http://localhost:3000/' : 'https://whiskynote.herokuapp.com/';

console.log('env_test',process.env.NODE_ENV?.includes('dev'))

export const client = axios.create({
  baseURL: END_POINT,
  withCredentials: true,
  headers: {
  },
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
});
//(value: AxiosResponse<any>) => AxiosResponse<any>
//accessToken이 있으면 헤더에 등록해줍니다.
function responseInterceptor(res: AxiosResponse) {
  const { token } = res.data;
  if (token)
    client.defaults.headers.common['Authorization'] = `JWT ${token}`;

  return res.data;
}

client.defaults.withCredentials = true;
client.interceptors.response.use(responseInterceptor);
