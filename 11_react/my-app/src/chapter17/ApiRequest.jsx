import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function ApiRequest(props) {
  // 서버에서 가져온 데이터를 담을 state
  const [data, setData] = useState(null);

  // 1. Promise/then
  // const handleRequst = (id) => {
  //   // jsonplaceholder에서 제공하는 테스트용 api 호출
  //   axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
  //     .then((response) => {
  //       console.log(response);
  //       setData(response.data); // axios 라이브러리가 JSON -> object/array 변환 작업을 자동으로 해줌
  //     })
  //     .catch((error) => { // 요청 실패한 경우 에러 핸들링
  //       console.error(error);
  //     })
  // };

  // 2. async/await
  const handleRequst = async (id) => {
    try {
      // jsonplaceholder에서 제공하는 테스트용 api 호출
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
      console.log(response);
      setData(response.data); // axios 라이브러리가 JSON -> object/array 변환 작업을 자동으로 해줌
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <button type='button' onClick={() => handleRequst(486)}>불러오기</button>
      </div>
      {data &&
        <>
          <textarea cols={70} rows={8} value={JSON.stringify(data, null, 2)} readOnly />
          <p>{data.title}</p>
          <img src={data.thumbnailUrl} alt="thumbnail" />
        </>
      }
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