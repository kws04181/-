import './App.css';
import { useState } from 'react';
import PostDetail from './components/PostDetail';

function App() {
  // 서버에서 데이터를 가져왔다고 가정
  const [posts, setPosts] = useState(['리액트 잘 쓰러면?',
    '자바스크립트 핵심 문법', '스타일링 가이드']);

  const [showPostDetail, setShowPostDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likeCount, setLikeCount] = useState([0, 0, 0]);

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
        {/* Quize : map()을 이용하여 포스트 반복 출력하기 */}
        {posts.map((post, index) => {
          return (
            <div key={index} className='list'
              onClick={() => {
                setShowPostDetail(true);
                setCurrentIndex(index);
              }}
            >
              <h4>{post}</h4>
              <p>2023년 1월 20일</p>
              <p>by SW.Kim</p>
              <hr />
              <span onClick={() => {
                const copyLikeCount = [...likeCount];
                copyLikeCount[1]++;
                setLikeCount([1]);
              }}>
                🤯 {likeCount[index]}
              </span>
            </div>
          );
        })}
        {/* {showPostDetail ? <PostDetail posts={posts} /> : null} */}
        {showPostDetail && <PostDetail posts={posts} setPosts={setPosts}
          currentIndex={currentIndex} />}
      </div>

    </>
  );
}


export default App;
