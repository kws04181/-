import axios from "axios";

// 상품과 관련된 api 요청 함수들을 정의
// 가독성과 여러 곳에서 재사용이 가능하도록 함수로 생성
export const getProducts = async () => {
  try {
    const response = await axios.get('http://localhost:4000/products');
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 다운되었거나, 인터넷 연결이 끊겼거나, url이 잘못됐을때
    console.error(error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:4000/productss/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 다운되었거나, 인터넷 연결이 끊겼거나, url이 잘못됐을때
    console.error(error);
    throw error;
  }
};

// 서버로 데이터를 보낼경우 //

// export const addProduct = async (product) => {
//   try {
//     const response = await axios.post(`http://localhost:4000/product-add`, { product });
//     if (response.status === 200) {
//       return response.data;
//     } else {
//       throw new Error(`api error: ${response.status} ${response.statusText}`);
//     }
//   } catch (error) { // 서버가 다운되었거나, 인터넷 연결이 끊겼거나, url이 잘못됐을때
//     console.error(error);
//     throw error;
//   }
// };

// request.body.product

// export const orderProduct = async ({ productId, orderCount }) => {
//   try {
//     const response = await axios.post(`http://localhost:4000/product-order`, { productId, orderCount });
//     if (response.status === 200) {
//       return response.data;
//     } else {
//       throw new Error(`api error: ${response.status} ${response.statusText}`);
//     }
//   } catch (error) { // 서버가 다운되었거나, 인터넷 연결이 끊겼거나, url이 잘못됐을때
//     console.error(error);
//     throw error;
//   }
// };

// request.body.productId
// request.body.productCount
