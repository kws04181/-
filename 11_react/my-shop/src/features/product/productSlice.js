import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  selectedProduct: {},
}

// thunk를 이용한 비동기 작업 처리하기
// 이점?
// 1) API 요청에 대한 상태 관리가 용이하다.
// 2)

// 상품 정보를 담을 slice를 만듦
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.productList = action.payload
    },
    getAllProductById: (state, action) => {
      state.selectedProduct = action.payload
    },
    // 더보기 버튼 클릭 시 전역 상태에 상품 목록 추가하는 리듀서
    getMoreProducts: (state, action) => {
      // console.log(action.payload);
      state.productList.push(...action.payload);
    }
  }
});


export const { getAllProducts, getAllProductById, getMoreProducts } = productSlice.actions;

export const selectedProductList = state => state.product.productList;
export const selctSelectedProduct = state => state.product.selectedProduct;

export default productSlice.reducer;
