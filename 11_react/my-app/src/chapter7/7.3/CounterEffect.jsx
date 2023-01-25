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

  // useEffect(() => {
  //   return () => {
  //     console.log('clean-up');
  //     document.title = 'Init Title';
  //   };
  // }, []);

  return (
    <div>
      <p>총 {count}번 클릭하셨습니다.</p>
      <button onClick={() => {
        setCount(count + 1);

        // useEffect()에 넣는것이랑 버튼 클릭안에 
        // 넣는것이랑 실행 시점이 다르기에 동작이 다름
        // 1. 처음 마운트 시에 실행 안됨(타이틀이 안바뀌어 있다.)
        // 2. 이후 버튼 클릭시 count값이 반영이 제대로 안된다.(set함수는 비동기 함수)
        // document.title = `You clicked ${count} times`;
      }}>
        Click
      </button>
    </div>
  );
}

export default CounterEffect;

// useEffect()를 쓰는 케이스
// - 주로 처음 렌더링시 해줘야 하는 작업들
// 1) 특정 객체에 addEventListener()로 이벤트를 등록해야 할 때
// 예: window나 document 객체에 이벤트 줄 때
// 2) error 발생시 페이지를 이전 페이지로 변경해야 할때
// 3) 마운트 됐을 때 그 페이지를 이용할 수 있는 사용자인지 권한 체크
// 4) 처음 렌더링 시 초기화 해주어야 할 작업들
// 5) 실행하는 로직이 있는 곳과 실행 결과를 보여주는 컴포넌트가
//    다른 곳이면 로직이 분리되서 가독성이 떨어지고 디버깅이 어렵다.
// 6) 데이터 페치(fetch)관련 작업을 많이 넣음
// 만약 버튼을 클릭하였을 때 데이터를 가져오는 로직을
// 넣게되면 새로고침 시 초기화됨 -> 다시 버튼을 클릭하여야한다.

// 정리!!
// onClick과 useEffect는 다른 용도
// onClick 속성으로 넣어준 콜백 함수는 '클릭 시 호출되는'함수이고,
// useEffect 내부에 있는 콜백 함수는 '렌더링 시 (의존성 배열에 따라)' 호출되는 함수이다.
// 어떻게 사용하는지에 따른 겹치는 결과도 있겠지만, 완전히 다른 의도를 가진다.