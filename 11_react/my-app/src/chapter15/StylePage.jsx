import styled, { css } from "styled-components";

// 0. style-components 설치하기
// npm install styled-components

// CSS in JS 란?
// 이 문구가 뜻하는 그대로, 이 기술은 JS안에 CSS를 작성하는 것

// styled-components란?
// CSS문법을 그대로 사용하면서 결과물을 스타일링된 컴포넌트 형태로 만들어주는 라이브러리
// 컴포넌트 개념을 사용하기 때문에 리액트와 궁합이 잘 맞음
// 벡틱을 사용하여 구성 요소의 스타일을 지정


// 1. 기본적인 사용법
// 스타일링된 컴포넌트 형태로 반환됨
const Wrapper = styled.div`
  padding: 1rem;
  background: #757575;

  /* 6. 반응형 디자인:
  - 일반 CSS를 사용할 때와 똑같이 meda쿼리를 사용 가능
  - 리액트스럽게 react-responsive 라이브러리 사용 가능
  */
  /* 기본적으로 가로 크기를 1024px에 가운데 정렬을 하고
  가로 크기가 작아짐에 따라 크기를 줄이고 768px 미만이 되면 꽉채우기 */
  width: 1024px;
  margin: 0 auto;
  @media screen and (max-width:1024px){
    width: 768px;
  }

  @media screen and (max-width:768px){
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #ffffff;
  text-align: center;
`;

// 2. props 사용하기
// 컴포넌트 형태라 props 사용이 가능
const Button = styled.button`
  width: ${props => props.width || '100px'}; // || 기본값 설정
  height: ${props => props.height || '40px'};// || 기본값 설정
  color:${props => props.dark ? 'white' : 'black'};
  background: ${props => props.dark ? 'black' : 'white'};
  border:2px solid black;
  cursor: pointer;

  /* 3. & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
  &:hover {
    background: #bea6a6;
  }

  /* 4. 여러 줄의 스타일 구분을 조건부로 설정해야 하는 경우 css를 불러와 사용 */
  ${props =>
    props.inverted &&
    css`
      background: white;
      color: #1f1f1f;
      border: 2px solid white;
      &:hover {
        background: #b9b9b9;
        color: white;
      }
    `
  }

  & + & {
    margin-left:1rem;
  }
`;

// 5. 스타일 확장(커스텀) 하기
// Button컴포넌트에 모서리를 둥글게하는 style이 추가된 RoundeedButton 컴포넌트
const RoundedButton = styled(Button)`
  border-radius: 16px;

`;

function StylePage() {
  return (
    <>
      <Wrapper>
        <Title>
          🙈안녕, 리액트!!🙉
        </Title>
      </Wrapper>
      <Button width='280px' height='60px'>
        Nomal
      </Button>
      {/* ={true} */}
      <Button dark={true}>
        Dark
      </Button>

      <Button inverted>
        Inverted
      </Button>

      <RoundedButton>
        Rounded
      </RoundedButton>
    </>
  );
}

export default StylePage;