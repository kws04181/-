import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useDispatch, usedispatch, useSelector } from "react-redux";
import data from '../data.json';

// 리액트(JS)에서 이미지 파일 import 하는법
import robinsonImg from "../images/robinson-pross-JFUcXi_mCac-unsplash.jpg"

const MainBackGround = styled.div`
  height: 500px;
  background-image: url(${robinsonImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Main(props) {
  const dispatch = useDispatch();

  // 처음 마운트 됐을때 서버에 상품 목록 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 데이터를 요청했다고 가정
    // ...api call ...
    dispatch();
  }, []);


  return (
    <>
      {/* 메인 이미지 섹션 */}
      <section>
        <MainBackGround />
      </section>

      {/* 상품 목록 섹션 */}
      <section>
        <Container>
          <Row>
            <Col md={4} >
              <img src='https://design.samsung.com/kr/contents/day-in-the-life/img/samsung-everyday-sec2-img-1.png' width="80%" />
              <h4>Title</h4>
              <p>price</p>
            </Col>
            <Col md={4}>
              <img src='https://design.samsung.com/kr/contents/day-in-the-life/img/samsung-everyday-sec1-img-1.png' width="80%" />
              <h4>Title</h4>
              <p>price</p>
            </Col>
            <Col md={4}>
              <img src='https://design.samsung.com/kr/contents/day-in-the-life/img/samsung-everyday-sec3-img-1.png' width="80%" />
              <h4>Title</h4>
              <p>price</p>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
}

export default Main;