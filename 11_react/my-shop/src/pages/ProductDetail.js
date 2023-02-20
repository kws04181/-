import React from 'react';
import { Button, Col, Container, Row, Alert, Form, Nav, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllProductById, selctSelectedProduct } from '../features/product/productSlice';


// 서버에서 받아온 데이터라고 가정
import data from '../data.json';
import { useDispatch, useSelector } from 'react-redux';

import styled, { keyframes } from 'styled-components';
import { toast } from 'react-toastify';
import TabContents from '../components/TabContents';
import { addBasket } from '../features/cart/cartSlice';
import Cart from './Cart';

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

  const [alert, setAlert] = useState(true); // Info창 상태
  const [orderCount, setOrderCount] = useState(1); // 주문수량 상태
  const [showTabIndex, setShowTabIndex] = useState(0); // 탭 index 상태
  const [show, setShow] = useState(false); // 모달 상태
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  const navigate = useNavigate();


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

    // 상세 페이지에 들어오면 해당 상품의 id를 localStorage에 추가
    let latestViewed = JSON.parse(localStorage.getItem('latestViewed')) || [];
    // Set 자료형을 이용하여 중복 제거
    latestViewed.push(productEl);
    latestViewed = new Set(latestViewed);
    // latestViewed = Array.from(latestViewed);
    latestViewed = [...latestViewed];
    localStorage.setItem('latestViewed', JSON.stringify(latestViewed));



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
  };

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
          <Button
            variant='warning'
            onClick={() => {
              dispatch(addBasket({
                id: product.id,
                title: product.title,
                price: product.price,
                count: orderCount
              }));

              handleOpen(); // 장바구니 모달 오픈
            }}
          >Shopping Basket</Button>
        </Col>
      </Row>

      {/* Tap Ui */}
      {/* defaultActiveKey: 기본으로 active할 탭, active 클래스가 들어가있다. */}
      <Nav variant="tabs" defaultActiveKey="link-1">
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => { setShowTabIndex(0); }}>
            Detail Info
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => { setShowTabIndex(1); }}>
            Review
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={() => { setShowTabIndex(2); }}>
            Q&amp;A
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" onClick={() => { setShowTabIndex(3); }}>
            Return/Exchange Info
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* 탭의 내용을 생성 후 조건부 렌더링하면 됨 */}
      {/* 방법1: 삼항 연산자 */}
      {/* {showTabIndex === 0
        ? <div>tab contents1</div>
        : showTabIndex === 1
          ? <div>tab contents2</div>
          : showTabIndex === 2
            ? <div>tab contents3</div>
            : showTabIndex === 3
              ? <div>tab content4</div>
              : null
      }; */}

      {/* 방법2: 컴포넌트로 추출 */}
      {/* <TabContents showTabIndex={showTabIndex} /> */}

      {/* 방법3: 배열이나 객체 형태로 만들어서 조건부 렌더링 */}
      {/* 배열 형태 */}
      {
        [
          <div>
            In JavaScript, the Promise is the ideal and the best way to handle asynchronous operations. They can run multiple asynchronous operations efficiently and accurately.
          </div>,
          <div>
            The JavaScript Promise provides handles errors better than other conventional techniques, callbacks, and events. The Promise object eventually conveys either the completion or failure of an asynchronous process and its consequent value.
          </div>,
          <div>
            In other words, users can also define the JS Promise as the soundest choice for handling multiple callbacks simultaneously. It avoids the undesired callback hell causing an unmanageable code.
          </div>,
          <div>
            Promises also provide a more reasonable option for programmers to read their code more virtually and efficiently, especially; if users use the particular code for executing multiple asynchronous operations.
          </div>,
        ][showTabIndex]
      }
      {/* 객체 형태 */}
      {/* {
        {
          'detail':
            <div>
              In JavaScript, the Promise is the ideal and the best way to handle asynchronous operations. They can run multiple asynchronous operations efficiently and accurately.
            </div>,
          'review':
            <div>
              In JavaScript, the Promise is the ideal and the best way to handle asynchronous operations. They can run multiple asynchronous operations efficiently and accurately.
            </div>,
          'qa':
            <div>
              In JavaScript, the Promise is the ideal and the best way to handle asynchronous operations. They can run multiple asynchronous operations efficiently and accurately.
            </div>,
          'exchange':
            <div>
              In JavaScript, the Promise is the ideal and the best way to handle asynchronous operations. They can run multiple asynchronous operations efficiently and accurately.
            </div>,
        }[{ showTab }]
      } */}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shop News</Modal.Title>
        </Modal.Header>
        <Modal.Body>장바구니에 상품을 담았습니다.<br />
          장바구니로 이동하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="primary" onClick={() => {
            navigate('/cart');
          }}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </Container >

  );
}

export default ProductDetail;