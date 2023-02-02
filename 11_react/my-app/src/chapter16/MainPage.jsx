import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MainPage(props) {
  // 사용자가 직접 경로르 쳐서 이동하는 경우는 드물다.
  // 페이지 이동을 위한 useNavigate() 훅을 제공
  // navigate('/경로');
  // navigate(1); 또는 navigate(-1); => 앞으로 가기 or 뒤로 가기
  const navigate = useNavigate();

  return (
    <div>
      <h1>Main Page</h1>
      <ol>
        {/* 방법1 */}
        {/* <li onClick={() => { navigate('/places'); }}>place</li>
        <li onClick={() => { navigate('/games'); }}>game</li>
        <li></li> */}

        {/* 방법2 : a태그 역할의 Link 컴포넌트 */}
        {/* 차이점?
          a태그의 기본 동작은 페이지를 이동시키면서, 페이지를 새로 불러온다.(새로고침)
          그렇게 되면 리액트 앱이 지니고 있는 상태들도 초기화되고,컴포넌트들도 새로 렌더링을 하게된다.
        */}
        {/* a태그의 사용이 필요하다면 Link 컴포넌트를 사용 */}
        <li>
          <Link to='/places'>place</Link>
        </li>
        <li>
          <Link to='/games'>game</Link>
        </li>
      </ol>
    </div>
  );
}

export default MainPage;