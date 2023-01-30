import { useState } from "react";

// 사용자의 정보를 입력받는 가입 양식 컴포넌트 만들기

// 1. 이름 입력받기
// name이라는 state 정의
// 값이 변경되면 이를 처리하기 위한 handleChangeName() 함수 정의

// 2. 성별 입력받기
// gender라는 state 정의
// select 태그에는 총 두가지 옵션이 들어간다(M,W).
// 값이 변경되면 이를 처리하기 위한 handleChangeGender() 함수 정의

// 3. 출력
// 이름과 성별을 입력하고 버튼을 누를 시 alert 창으로 입력된 이름과 성별 출력하기

function SignUp() {
  const [userName, setUserName] = useState('');
  const [userGender, setUserGender] = useState('male');

  const handleuserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleuserGenderChange = (e) => {
    setUserGender(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`
    이름: ${userName}
    성별: ${userGender}`);
  };

  return (
    <>
      <label>
        이름:
        <input
          type="text"
          value={userName}
          onChange={handleuserNameChange}
        />
      </label>
      <br />
      <label>
        성별:
        <select
          type="gender"
          value={userGender}
          onChange={handleuserGenderChange}>
          <option value='male'>
            남성
          </option>
          <option value='female'>
            여성
          </option>
        </select>
      </label>
      <br />
      <br />
      <button
        type="button"
        onClick={handleSubmit}>
        가입하기
      </button>
    </>
  );
}

export default SignUp;