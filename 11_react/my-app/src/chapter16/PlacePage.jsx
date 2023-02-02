import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlacePage(props) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Place Page</h1>
      <button type='button' onClick={() => {
        navigate('/');
      }}>Alt + 왼쪽 방향키</button>
    </div>
  );
}

export default PlacePage;