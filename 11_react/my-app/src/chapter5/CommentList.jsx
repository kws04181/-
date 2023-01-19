import Comment from "./Comment";

// 댓글 데이터를 별도의 객체러 분리하고 가능한 배열에 담기
const comments = [
  {
    name: '다나카',
    comment: '모무모무몸매모무모무몸매'
  },
  {
    name: '유재석',
    comment: '안녕하세요'
  },
  {
    name: '문동은',
    comment: '멋지다 연진아'
  },
  {
    name: '정마담',
    comment: '쏠수 이쒀어어'
  },
  {
    name: '김응수',
    comment: '마포대교는 무너졌냐 이xx야🍟'
  },
];

// 댓글들을 포함하는 CommentList 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* 배열을 동적으로 렌더링해야 할 때에는 배열의 map() 함수를 사용 */}
      {/* map()은 배열 안에 있는 각 요소를 반환하여 새로운 배열을 만든다 */}
      {/* 앞으로 리액트에서 동적인 배열을 렌더링해야 할 때는 map() 함수를 사용하여
      일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면 된다. */}
      {comments.map((comment, index) => {
        return (
          <Comment key={index} name={comment.name} comment={comment.comment} />
        );
      })}

      {/* map() 함수 결과 */}
      {/* {[
        <Comment
          name={'다나카'}
          comment={'모무모무몸매모무모무몸매'}
        />,
        <Comment
          name={'다나카'}
          comment={'모무모무몸매모무모무몸매'}
        />,
        <Comment
          name={'다나카'}
          comment={'모무모무몸매모무모무몸매'}
        />,
      ]} */}

      {/* <Comment name="문동은" comment="멋지다 연진아" />
      <Comment name="성성원" comment="리액트 재미있다 하핳ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ." /> */}
    </div>
  );
}
export default CommentList;