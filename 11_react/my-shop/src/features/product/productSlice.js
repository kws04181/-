import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  selectedProduct: {},
}

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
    getMoreProducts: (state, action) => {
      state.productList.push();
    }
  }
});


export const { getAllProducts, getAllProductById, getMoreProducts } = productSlice.actions;

export const selectedProductList = state => state.product.productList;
export const selctSelectedProduct = state => state.product.selectedProduct;

export default productSlice.reducer;
