
// useCounter() 커스텀 훅
// initialValue라는 초기 카운트 값을 받아서 count라는 
// 이름의 state 생성 시 초기값으로 제공
// 카운트 증가&감소를 편하게 할수 있는 함수를 제공하는 훅
// 어떤 함수 컴포넌트에서든지 카운트 기능을 쉽게 사용 

import { useState } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  const decreaseCount = () => {
    setCount((count) => Math.max(count - 1, 0));
  };

  return [count, increaseCount, decreaseCount];

}

export default useCounter;