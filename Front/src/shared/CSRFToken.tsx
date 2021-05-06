/* eslint-disable no-var */
import axios from 'axios';
import React from 'react';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

function getCookie(name) {
  let cookieValue: null | string = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].replace(' ', '');
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
const CSRFToken = () => {
  const csrftoken = getCookie('csrftoken');
  if (csrftoken === null)
    return <input type="hidden" name="csrfmiddlewaretoken" />;
  else
    return <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />;
};
export default CSRFToken; // 이걸로 <CSRFToken/>이라는 컴포넌트를 사용할 수 있게 됨.
