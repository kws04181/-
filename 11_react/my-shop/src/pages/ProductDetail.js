import React from 'react';
import { Button, Col, Container, Row, Alert, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllProductById, selctSelectedProduct } from '../features/product/productSlice';


// 서버에서 받아온 데이터라고 가정
import data from '../data.json';
import { useDispatch, useSelector } from 'react-redux';

import styled, { keyframes } from 'styled-components';
import { toast } from 'react-toastify';
// 스타일드 컴포넌트 이용한 애니메이션 속성 적용
const highlight = keyframes`
  from {background-color:#cff4fc;} 
  50% {background-color:#e8f7fa;}
  to {background-color:#cff4fc;} 
`;


const StyledAlert = styled(Alert)`
  animation: ${highlight} 1s linear infinite;
`;

function ProductDetail(props) {

  const [alert, setAlert] = useState(true);

  const [orderCount, setOrderCount] = useState(1);


  // useParams() 사용하여 productEl 가져오기
  const { productEl } = useParams();
  const dispatch = useDispatch();

  // 퀴즈: 전역 스토어에서 selectedProduct 가져오기
  const product = useSelector(selctSelectedProduct);

  // 처음 마운트 됐을때 서버에 상품 id를 이용하여 
  // 데이터를 요청하고 그 결과를 리덕스 스토어에 저장하기
  useEffect(() => {
    // 서버에서 특정 상품의 데이터를 가져오는 작업을 했다고 가정
    // ...api call...
    const foundProduct = data.find((product) => {
      return product.id === productEl;
    });

    dispatch(getAllProductById(foundProduct));

    // 3초 뒤에 alert창 사라지게 만들기
    const timer = setTimeout(() => {
      setAlert(false);
      // 불필요하게 타이머가 계속 생기는 것을 정리
      return () => {
        clearTimeout(timer);
      };
    }, 3000);
  }, []);

  const handleChangeOrderCount = (e) => {
    if (isNaN(e.target.value)) {
      toast.error('😖숫자만 입력 가능합니다😓')
      return;
    }
    setOrderCount(Number(e.target.value));
  }

  // product가 없을 경우
  if (!product) {
    // return null;
    return <div>해당 상품이 존재하지 않습니다.</div>;
  }

  return (
    <Container className='pt-3'>
      {alert &&
        <StyledAlert variant="info" onClose={() => setAlert(false)} dismissible>
          현재 34명이 보고 있습니다.
        </StyledAlert>
      }
      <Row>
        <Col md={6}>
          <img src={product.imagePath} width="80%" />
        </Col>
        <Col md={6}>
          <h4 className='pt-5'>{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>

          <Col md={4} className="m-auto mb-3">
            <Form.Control
              type='text'
              value={orderCount}
              onChange={handleChangeOrderCount}
            />
          </Col>

          <Button variant='primary'>Order Now</Button>
        </Col>
      </Row>
    </Container >

  );
}

export default ProductDetail;