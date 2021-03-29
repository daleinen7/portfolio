import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 30%;
  z-index: 2;
  background: var(--highlight); 
  h3 {
    text-align: center;
  }
  p {
    padding: 0 1rem;
  }
`;

export default function SkillBlock(props) {
  return(
    <StyledDiv>
      <li>
        <h3>{props.skill}</h3>
        <p>{props.copy}</p>
      </li>
    </StyledDiv>
  )
}