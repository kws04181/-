import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cartList: [
    {
      id: "1",
      title: "Arcsaber 11 Pro",
      price: 299000,
      count: 2
    },
    {
      id: "3",
      title: "Aerus 2",
      price: 199000,
      count: 1
    },
  ],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 장바구니 수량을 변경하는 리듀서 함수 만들기
    // 퀴즈: 상품의 id값을 받아서 해당 상품의 수량을 1씩 증가/감소
    incrementCount: (state, action) => {
      const targetItem = state.cartList.find((cart) => cart.id === action.payload);
      targetItem.count += 1;
    },

    decrementCount: (state, { payload: id }) => {
      const targetItem = state.cartList.find((cart) => cart.id === id);
      targetItem.count -= 1;
    },
    // 장바구니에 아이템을 추가하는 리듀서 함수 만들기
    // 이미 속해있는 아이템이면 카운트만 증가
    // 장바구니에 없는 상품이면 새롭게 추가
    addBasket: (state, { payload: item }) => {
      // item = { id, title, price, count }를 받아온다.
      // find()를 사용하여 해당 상품이 있는지 찾고
      console.log(item);

    }
  }
})

export const selectCartList = state => state.cart.cartList;

export const { incrementCount, decrementCount, addBasket } = cartSlice.actions;

export default cartSlice.reducer;

