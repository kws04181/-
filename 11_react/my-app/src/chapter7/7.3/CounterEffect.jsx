import { useEffect } from "react";
import { useState } from "react";

function CounterEffect(props) {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 동일한 작동
  useEffect(() => {
    console.log('effect 실행');

    // 브라우저 API를 이용하여 Wep Title 업데이트
    document.title = `You clicked ${count} times`;

    // 이 예제에서는 effect는 한번이 아니라 count가 변할때마다 실행된다.
    
    // (심화) React가 다음 차례의 effect를 실행하기 전에
    // 이전 렌더링에서 파생된 effect 또한 정리하려고 한다.

    // 정말로 딱 언마운트 될 때에만 effect 정리 함수가 실행되길
    // 원하면 의존성 배열로 빈 배열([])을 넣어줘야 함!!
    return () => {
      console.log('clean-up');
      document.title = 'Init Title';
    };
  }, [count]);
  // 함수 컴포넌트 안에 선언되기 때문에 해당 컴포넌트의 props와 state에 접근 가능

  useEffect(() => {
    return () => {
      console.log('clean-up');
      document.title = 'Init Title';
    };
  }, []);

  return (
    <div>
      <p>총 {count}번 클릭하셨습니다.</p>
      <button onClick={() => { setCount(count + 1) }}>Click</button>
    </div>
  );
}

export default CounterEffect;