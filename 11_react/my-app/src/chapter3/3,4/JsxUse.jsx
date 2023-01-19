import React, { Fragment } from "react"
import './JsxUse.css';

function JsxUse(props) {
  // JSX의 사용법(문법)
  // 1. 꼭 닫혀야 하는 태그
  // const element = (
  //   <div>
  //     {/* HTML 에서는 input 또는 br 태그를 사용할 때 닫지 않고 사용 가능 */}
  //     {/* 하지만 리액트에서는 태그를 열었으면 무적권 닫아야 한다. */}
  //     <div><h1 style={color.red}>할라</h1></div>
  //     <input/>
  //     <br />
  //   </div>
  // ); // 소괄호 생략 가능 하지만 가독성을 위해서 사용하는것이 조흠

  // 2. 꼭 감싸져야만 하는 태그
  // 2개 이상의 태그는 무조건 하나의 태그로 감싸져있어야 함

  // const element = (
  // <div>안녕하시렵니까</div>
  // <div>안녕하시렵니까</div>

  // <div>
  //   <div><b>ㅎㅇㅎㅇ</b></div>
  //   <div>ㅂㅇㅂㅇ</div>
  // </div>

  // 이렇게 단순히 감싸기 위하여 불필요한 div로 감싸는게 별로 좋지 않을 때도 있다.
  // HTML 중첩 구조가 복잡해지며 그에 따른 스타일 설정을 할 때도 복잡해 짐
  // 이럴 때 사용하는 것이 React의 Fragment

  // <React.Fragment>
  //   <div><b>ㅎㅇㅎㅇ</b></div>
  //   <div>ㅂㅇㅂㅇ</div>
  // </React.Fragment>

  //  React.Fragment는 생략도 가능
  // <>
  //   <div><b>ㅎㅇㅎㅇ</b></div>
  //   <div>ㅂㅇㅂㅇ</div>
  // </>
  // )

  // 3. JSX 안에 자바스크립트 값 또는 표현식 사용하기
  // 자바스크립트 변수(혹은 함수)를 사용해야 할 때에는 {} 사용
  // const name = 'react';

  // const user = {
  //   firstName: 'Kim',
  //   lastName: 'Seong Won'
  // };

  // function formatName(user) {
  //   return `${user.firstName} ${user.lastName}`
  // }

  // const element = (
  //   <>
  //     <div>{name}배우기</div>
  //     <h1>Hello,{formatName(user)}</h1>
  //   </>
  // );

  // 4. style과 className
  // 인라인 스타일은 객체 형태로 작성하는데 
  // background-color처럼 -로 구분되어 있는 이름은 camelCase형태로 네이밍
  // ex) background-color -> backgroundColor 
  // class 값 설정할 때는 class=" " 가 아닌 className = "" 으로 설정

  // const style = {
  //   backgroundColor: 'coral',
  //   color: '#fff',
  //   fontWeight: 700,
  //   fontSize: 24, // 기본단위 PX
  //   padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  // };

  // const element = (
  //   <>
  //     <div style={style}>리액트 공부하기</div>
  //     <div className="gray-box"></div>
  //   </>
  // );

  // 5. JSX 주석
  // JSX 내부의 주석은 JS 여러줄 주석을 중괄호로 감싼 형태
  // {/*  */}
  // JS 주석은 우리가 아는 그대로 사용
  const element = (
    <>
      {/* 주석은 화면에 보이지 않는다. */}
      <div
      // 열리는 태그 내부에서는 이렇게 주석 작성
      >
        주석 테스트
      </div>
    </>
  )



  return element;
}

export default JsxUse; // JsxUse 컴포넌트 내보내기 
// export를 해줘야 다른곳에서 import 가능