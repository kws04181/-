// 1. Redux Store 생성하기
// 2. 전역 상태를 보관하는 저장소

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';

export const store = configureStore({
  reducer: {
    // 4. Slice Reducers 등록하기
    // Slice Reducers를 store에 등록해야 컴포넌트들이 전역 state를 사용 가능하다.
    counter : counterReducer,
  }
});
