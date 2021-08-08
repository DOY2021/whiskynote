import axios, { AxiosResponse } from 'axios';

const END_POINT = 'http://localhost:3000/';

export const client = axios.create({
  baseURL: END_POINT,
  //쿠키 주고받을 때 true로 설정해줘야 함.
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': true,
  },
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
});
//(value: AxiosResponse<any>) => AxiosResponse<any>
//accessToken이 있으면 헤더에 등록해줍니다.
function responseInterceptor(res: AxiosResponse) {
  const { accessToken } = res.data;
  if (accessToken)
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  return res.data;
}

client.interceptors.response.use(responseInterceptor);
