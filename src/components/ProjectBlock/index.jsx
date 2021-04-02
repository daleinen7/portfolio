import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

  h3 {
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  h4 {
    color: var(--highlight);
    margin-bottom: 0;
    margin-top: 0;
  }

  .technologies{
    color: white;
    font-weight: semi-bold;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .techList {
    color: var(--highlight);
    margin-top: 0;

  }

  .row {
    background: var(--gray);
    padding: 20px;
    margin-bottom: 20px;
    width: 600px;
    height: 355px;
    display: flex;
    flex-direction: row;
    .splash {
      width: 270px;
    }
    
  }

  .column {
    background: var(--gray);
    padding: 40px;
    margin-bottom: 20px;
    width: 400px;
    height: 750px;
    display: flex;
    flex-direction: column;
    
    .splash {
      width: 400px;
    }

  }
  

  .info {
    padding: 20px 20px 20px 0;

    p {
      font-size: 0.8rem;
    }
  }
`;

export default function ProjectBlock(props) {
  return(
    <StyledDiv>
      <div className={props.direction}>
        <img src={props.img} alt={props.title} className="splash"/>
        <div className="info">
          <h3>{props.title}</h3>
          <h4>{props.sub}</h4>
          <p>{props.copy}</p> 
          <h4 className="technologies">Technologies Used</h4>
          <ul className="techList">
          {props.techUsed.map(tech => {
            return <li>{tech}</li>
          })}
          </ul>
        </div>
      </div>
    </StyledDiv>
  )
}