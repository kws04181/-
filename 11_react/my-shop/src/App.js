import { createGlobalStyle } from "styled-components";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추가
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstap CSS 추가
import Header from "./pages/Header";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import { ToastContainer } from 'react-toastify';
import Cart from "./pages/Cart";

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

  .text-ellipsis {
    white-space: nowrap; // 한줄로 만들기
    overflow: hidden;
    text-overflow: ellipsis; // 오버플로우된것들은 ...으로 생략
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
            {/* /detail/1 로 접속하면 productEl에 1이 담김 */}
            <Route path="/detail/:productEl" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<div><b>Page does not Exist</b></div>} />

          </Route>
        </Routes>

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          pauseOnFocusLoss={false}
          theme="dark"
        />

      </BrowserRouter>

    </>
  );
}

export default App;
