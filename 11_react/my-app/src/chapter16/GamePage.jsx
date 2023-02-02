import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function GamePage(props) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Game Page</h1>
      <ul>
        <li>
          <Link to="/games/hot">hot game</Link>
        </li>
        <li>
          <Link to="/games/new">new game</Link>
        </li>
      </ul>
      <Outlet />
      <button type='button' onClick={() => {
        navigate('/');
      }}>Alt + 왼쪽 방향키</button>
    </div>
  );
}

export default GamePage;