import React from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"

const StyledDiv = styled.div`
  max-width: 840px;
  background: var(--background);
  padding: 20px;
`;

export default function ProjectBlock(props) {
  return(
    <StyledDiv>
      {/* <StaticImage src="" alt={props.title} /> */}
      <h3>{props.title}</h3>
      <h4>{props.sub}</h4>
      <p>{props.copy}</p>
    </StyledDiv>
  )
}