import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, selectCount } from "./CounterSlice";
import { useState } from 'react';

export const counterSlice = createSlice({
  name: 'counter', 
  initialState,
  reducers: {
    increment: (state) => { 
      state.value += 1; 
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
});

// 5. 리액트 컴포넌트에서 Redux State와 Actions 사용하기
function Counter() {
  // Redux Store에 있는 state를 가져오는 함수
  // const counter = useSelector((state) => state.counter.value);
  // state만 리턴하면 전역 state 전부 가져온다.

  const counter = useSelector(selectCount);

  // Redux Store에 요청을 보내주는 함수
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <button
          type='button'
          // dispatch() 함수: 액션을 발생시켜 스토어에 보냄
          // -> 스토어는 해당 액션에 매칭되는 리듀서 함수를 실행시켜서 새로운 상태를 생성해줌
          // decrement() 함수: 액션(객체) 생성 함수
          onClick={() => dispatch(decrement())}
        >
          -1 감소
        </button>
        <br />

        <span >{counter}</span>
        <br />

        <button
          type='button'
          onClick={() => dispatch(increment())}
        >
          +1 증가
        </button>
      </div>
      <div>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          type='button'
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}

export default Counter;