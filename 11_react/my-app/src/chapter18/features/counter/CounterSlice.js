// 3. Redux State Slice 만들기
import { createSlice } from "@reduxjs/toolkit";

// state 초기값으로 원시값, 배열, 객체 등 모든 데이터 타입 사용이 가능하다.
// 아래와 같이 주로 객체 형태로 사용한다.(가독성도 좋고 추후 state 변경하기 편리하다.)
const initialState = {
  value: 0,
};

// 전역 state 만드는 방법
// useState()와 비슷한 역할을 하는데 Redux에서는 state를 Slice라고 부름
// createSlice() 함수: state이름, 초기값 설정, 액션 및 리듀서 함수를 만드는 것을 도와준다.
// 인자값으로 name, initialState, reducers 속성을 갖는 객체를 넣음
export const counterSlice = createSlice({
  name: 'counter', // state이름: action 이름을 만드는데도 사용한다.
  initialState,
  // reducer 함수: state를 변경하는 함수
  // 현재 state와 action 객체를 파라미터로 받아오고 필요한 경우 상태를 업뎃하고 새 상태를 반환하는 함수
  reducers: {
    increment: (state) => { // 첫번째 파라미터: 현재 state를 받아온다.
      state.value += 1; // 배열 혹은 객체의 경우에도 직접 수정하는 형태로 작성 가능하다.
      // 어떻게? Immer 라이브러리가 내장되어 불변성 관리를 해준다.
      // 실제로 상태를 직접 변경하지 않고 내부적으로 state 복사본을 만들어서 개를 변경하고 새로운 상태를 반환함
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      // 두번째 파라미터: action 객체 = {type: 발생한 액션의 타입, payload: 화물, 전달 데이터}
      state.value += action.payload
    },
  },
});

console.log(counterSlice);

// 각 reducer에 대한 액션 생성 함수들이 객체 형태로 들어있음
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 선택자 함수
export const selectCount = (state) => state.counter.value;

// 위에서 정의한 리듀서 함수들
export default counterSlice.reducer

// 그래서 앞으로 Redux의 state를 변경하려면?
// 1) state 변경 함수(리듀서) 만들기
// 2) 다른 곳에서 사용할 수 있게 export
// 3) 수정을 원할 시 그 함수를 실행해달라고 Store에 요청을 해야한다.
// => dispatch() 함수를 사용하여 store에 액션을 보내야 한다.
