import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
  
  width: 340px;
  height: 300px;
  z-index: 2;
  background: var(--highlight); 

  @media(max-width: 450px) {
    width: 100%;
    height: auto;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .skillIcon {
    position: absolute;
    margin-top: 1em;
    width: 100px;
  }

  h3 {
    position: absolute;
    margin-top: 120px;
    text-align: center;
    margin-bottom: 0;
  }
  p {
    margin-top: 160px;
    padding: 0 1rem;
  }
`;

export default function SkillBlock(props) {
  return(
    <StyledDiv>
      <li>
        <img className="skillIcon" src={props.img} alt={props.img}/>
        <h3>{props.skill}</h3>
        <p>{props.copy}</p>
      </li>
    </StyledDiv>
  )
}