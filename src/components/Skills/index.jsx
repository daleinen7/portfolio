import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: paleturquoise;

`;

export default function Skills() {
  return(
    <StyledDiv>
      <h2>Skills</h2>
      <ul>
        <li>
          Jamstack
        </li>
        <li>
          React
        </li>
      </ul>
    </StyledDiv>
  )
}