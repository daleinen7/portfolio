import React from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"

const StyledDiv = styled.div`
  width: 640px;
  height: 502px;
  background: var(--gray);
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  
  .splash {
    width: 400px;
    padding: 20px;
  }

  .info {
    padding: 20px 20px 20px 0;
  }
`;

export default function ProjectBlock(props) {
  return(
    <StyledDiv>
      <img src={props.img} alt={props.title}/>
      {/* <StaticImage src="" alt={props.title} /> */}
      <div className="info">
        <h3>{props.title}</h3>
        <h4>{props.sub}</h4>
        <p>{props.copy}</p> 
      </div>
    </StyledDiv>
  )
}