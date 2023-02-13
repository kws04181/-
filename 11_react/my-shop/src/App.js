import { createGlobalStyle } from "styled-components";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css'; // bootstap CSS 추가
import Header from "./pages/Header";
import Main from "./pages/Main";

const GlobalStyle = createGlobalStyle`

  body {
    box-sizing: border-box;
  }

  #root {
    text-align: center;
  }

  *{
    box-sizing: border-box;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        {/* 부트스트랩 연습 */}
        {/* <button type="button" className="btn btn-primary">Primary</button> */}
        {/* <Button variant="primary">Primary</Button> */}

        {/* Quiz: Header 컴포넌트 추출 및 Outlet 활용하여 라우팅 구성해보기 */}
        <Routes>
          <Route path="/" element={<Header />}>
            {/* index: index route(여기서는 defalult child route) */}
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
