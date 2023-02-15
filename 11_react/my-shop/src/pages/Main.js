import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import data from '../data.json';
import {
  getAllProducts,
  getMoreProducts,
  getMoreProductsAsync,
  selectedProductList,
  selctStatus
} from '../features/product/productSlice'
import ProductListItem from '../components/ProductListItem';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from "axios";
import { getProducts } from '../api/productAPI';


// 리액트(JS)에서 이미지 파일 import 하는법

const MainBackGround = styled.div`
  height: 500px;
  background-image: url(https://tmup.com/user/img/main/cont_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 100px;
`;

function Main(props) {
  const dispatch = useDispatch();
  // const ProductList = useSelector((state) => state.product.productList)
  const ProductList = useSelector(selectedProductList);

  // React-spinners
  // API 요청 상태 가져오기(로딩 상태)
  const status = useSelector(selctStatus);


  // 처음 마운트 됐을때 서버에 상품 목록 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 데이터를 요청했다고 가정
    // ...api call ...
    dispatch(getAllProducts(data));
  }, []);

  const handelGetMore = async () => {
    const result = await getProducts();
    if (!result) return;

    // 스토어에 dispatch로 요청 보내기
    dispatch(getMoreProducts(result));
  };

  if (status === 'loading') {
    return <>로딩중입니다.</>
  }


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
            {ProductList.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </Row>
        </Container>
        {/* 상품 더보기 */}
        <Button
          variant='secondary'
          className='mb-4'
          onClick={() => {
            axios.get('http://localhost:4000/products')
              .then((response) => {
                console.log(response.data);
                // 스토어에 dispatch로 요청 보내기
                dispatch(getMoreProducts(response.data));
              })
              .catch((error) => {
                console.error(error);
              });
          }}
        >
          Add
        </Button>

        {/* 위 HTTP 요청 코드를 함수로 생성하여 api폴더로 추출하고
        async/await 로 바꾸기 */}
        <Button
          variant='secondary'
          className='mb-4'
          onClick={handelGetMore}
        >
          Add
        </Button>
        {/* thunk를 이용한 비동기 작업 처리하기 */}
        <Button
          variant='secondary'
          className='mb-4'
          onClick={() => dispatch(getMoreProductsAsync())}
        >
          Add {status}
        </Button>
      </section>
    </>
  );
}

export default Main;

// json-server
// 실무와 비슷한 느낌으로 하기 위해 가짜 API 서버를 만듦
// json 파일 하나만 있으면 연습용 서버를 쉽게 구성 가능
// npx json-server ./src/data2.json --port 4000