import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartList, incrementCount, decrementCount } from '../features/cart/cartSlice';
import { useParams } from 'react-router-dom';

function Cart() {

  const dispatch = useDispatch();
  const cartEl = useSelector(selectCartList);

  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Product Name</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartEl.map((cart, index) => (
            <tr key={cart.id}>
              <td>{index + 1}</td>
              <td>{cart.title}</td>
              <td>
                <Button variant="outline-success" onClick={() => { dispatch(decrementCount(cart.id)) }}>-</Button>
                {cart.count}
                <Button variant="outline-success" onClick={() => { dispatch(incrementCount(cart.id)) }}>+</Button>
              </td>
              <td>{cart.price * cart.count}원</td>
            </tr>
          ))}
          {/* 퀴즈: 전역 스토어에서 cartList를 꺼내오기 */}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;