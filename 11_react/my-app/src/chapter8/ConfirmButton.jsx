import { useState } from "react";

function ConfirmButton() {

  const check = '확인됨';

  const [isConfirmed, setisConfirmed] = useState(0);

  const handleConfirm = () => {
    setisConfirmed(isConfirmed => !isConfirmed);
  }

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? check : '🍔 🍟'}
    </button>
  );
}

export default ConfirmButton;

// Quiz: 버튼을 누르면 '확인하기'가 '확인됨'으로 변경되면서 버튼 비활성화 처리 해보기
// 무엇을 해야할까
// isConfirmed 라는 state 만들기
// 버튼을 클릭하면 isConfirmed 상태를 바꾸는 handleConfirm() 이벤트 핸들러(함수) 만들기
// 조건부 렌더링으로 버튼의 내용 수정하기
// disabled 속성 이용해서 버튼 비활성화