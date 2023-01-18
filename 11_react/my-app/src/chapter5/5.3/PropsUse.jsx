import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";
import Profile from "./Profile";

function PropUse(props) {
  return (
    <>
      <Profile
        // 키-값 쌍의 형태로 컴포넌트에 props를 전달할 수 있음
        // 정수, 변수, 다른 컴포넌트 값을 넣을 때는 {}로 감싼다.
        // 문자열을 {} 생략 가능
        name="KIM"
        introduction="안녕하세요. KIM입니다."
        viewCount={1997}
      />
      <Layout
        // props로 다른 컴포넌트를 넘기는 것도 가능
        width={5752}
        height={3539}
        header={
          <Header title="성성원의 블록입니다." />
        }
        footer={
          <Footer />
        }
      />
    </>
  );
}

export default PropUse;