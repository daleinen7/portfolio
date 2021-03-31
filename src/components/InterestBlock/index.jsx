import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 250px;
  height: 250px;
  background: var(--gray);
`;

export default function InterestBlock(props) {
  return(
    <StyledDiv>
      <h3>{props.title}</h3>
      <p>{props.copy}</p>
    </StyledDiv>
  )
}