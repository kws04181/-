import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // 서버에서 데이터를 가져왔다고 가정
  const [posts, setPosts] = useState(['리액트 잘 쓰러면?', '자바스크립트 핵심 문법', '스타일링 가이드']);

  console.log(posts);

  return (
    <>
      {/* 상단 헤더 만들기 */}
      <header className='header--dark'>
        <h4>Kim Seong Won</h4>
        <nav>
          <ul>
            <li>트렌딩</li>
            <li>최신</li>
          </ul>
        </nav>
      </header>

      <div className='inner'>
        {/* 포스트 목록 */}
        <div className='list'>
          <h4>{posts[0]}</h4>
          <p>2023년 1월 20일</p>
          <p>by SW.Kim</p>
        </div>
        <div className='list'>
          <h4>{posts[1]}</h4>
          <p>1997년 11월 09일</p>
          <p>my birthday</p>
        </div>
        <div className='list'>
          <h4>{posts[2]}</h4>
          <p>2023년 1월 20일</p>
          <p>by SW.Kim</p>
        </div>
      </div>

    </>
  );
}

export default App;
