import React from 'react';
import { useState } from 'react';

function ApiRequest(props) {
  // 서버에서 가져온 데이터를 담을 state
  const [data, setData] = useState(null);

  // 1. Promise/then
  const handleRequst = (id) => {
    
  };

  return (
    <div>
      <div>
        <button type='button'>불러오기</button>
      </div>
    </div>
  );
}

export default ApiRequest;

// 자바스크립트를 이용하여 서버 쪽 데이터를 필요로 할때에는
// ajax 기법을 사용하여 서버의 API를 호출함으로써 데이터를 수신
// ajax: 비동기 JS와 XML

// ajax 쓰는 다양한 방법
// fetch() 함수 -es6차의 HTTP 요청 함수
// axios - 외부 라이브러리(제일 많이 씀)

// Axios 라이브러리 설치
// npm intall axios
// 기본 사용법
// axios.get('url').then();