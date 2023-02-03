import React from 'react';
import styled from "styled-components";
import CommentListItem from './CommentListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function CommentList(props) {
  const { comments } = props;

  return (
    <Wrapper>
      {comments.map((com) => {
        return (
          <CommentListItem 
          key={com.id}
          comment={com.content}
          />
        );
      })}
    </Wrapper>
  );
}

export default CommentList;