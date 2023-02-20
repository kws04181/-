import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartList, incrementCount, decrementCount, removeItemFromCart } from '../features/cart/cartSlice';
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
            <th>Delete</th>
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
              <td>
                <button
                  type='button'
                  onClick={() => { dispatch(removeItemFromCart(cart.con)) }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;