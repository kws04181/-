import React from 'react';
import Counter from './features/counter/Counter';

function CounterApp(props) {
  return (
    <Counter />
  );
}

export default CounterApp;

// Redux: 전역 상태 관리 라이브러리
// 설치하기
// npm install @reduxjs/toolkit react-redux

// 만약에 카운터의 state가 여기저기 컴포넌트에 공유가 필요하다면 어디에 생성해야할까?
// 공통 부모에 만들고 props로 자식에게 전달해야 됨(state 끌어올리귀)

// 근데 Redux를 사용하면 컴포넌트들이 props 없이 state 공유가 가능하다.(Redux의 최고 장점)

// Redux Store라는 저장소에 state를 저장할 수 있다. 
// (=전역 상태 <=> 리액트 컴포넌트에서 직접 만든 state)

// 컴포넌트들은 Redux Store에서 직접 state를 꺼내오면 된다.

// Redux 사용하면 편한데 props는 왜 사용하는지?
// 1) 외부 라이브러리 설치 필요
// 2) 세팅하는 코드(문법)들이 필요(보일러 플레이트)
// 근데 Redux를 사용한다고 해서 모든 state를 Redux Store안에 넣는 것은 지양해야한다.
// - 공유가 필요없는 state는 사용하지 않는다.
// - 간단히 끌려올려서 그 부분에서만 쓸 수 있는 state는 사용하지 않는다.


