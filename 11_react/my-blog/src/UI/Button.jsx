import React from 'react';

const StyledButton = styled.button`
padding:8px 16px;
font-size :1rem ;
border: 1px;
border-radius: 8px;
cursor: pointer;
`
function Button(props) {
  const { title, onClick } = props;

  return (
    // props로 받아온 title이 있을때는

    <StyledButton onClick={onClick}>
      {title || '버튼'}
    </StyledButton>
  );
}

export default Button;