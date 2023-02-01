import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

// 글로벌(공통)스타일 적용하기 index.css에서 해도 무방하지만
// styled-components를 사용해서 적용하고 싶다면
// createGlobalStyle을 사용하면 컴포넌트가 만들어지고 이를 렌더링하면 된다.

const GlobalStyle = createGlobalStyle`
  /* reset css 적용 */
  ${reset}

  /* 글로벌(공용) 스타일 */
  body {
    background: #e9ecef;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;


// 패키지 설치
// npm install styled-components styled-reset react-icons

// react-icons: 리액트에서 다양한 아이콘을 쓸 수 있는 라이브러리
// SVG형태의 아이콘을 리액트 컴포넌트처럼 쉽게 사용
// 커스텀은 props 또는 CSS 스타일로 변경이 가능
