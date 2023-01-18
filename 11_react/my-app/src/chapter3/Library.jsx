import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="네모 아저씨 종이접기" numOfPage={300}/>
      <Book name="한복 바지 종이 접기(전통적인 방법)" numOfPage={400}/>
      <Book name="종이 접기 한복 치마(전통적인 방법)" numOfPage={500}/>
    </div>
  );
}
// Library 컴포넌트는 총 3개의 Book 컴포넌트를 렌더링

export default Library;