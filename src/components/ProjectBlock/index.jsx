import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

  h3 {
    line-height: 1.4rem;
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 10px;
  }

  h4 {
    line-height: 1.2rem;
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
    width: 550px;
    height: 355px;
    display: flex;
    flex-direction: row;

    .info {
      align-self: flex-start;
      margin-left: 20px;
    }
    
    .splash {
      align-self: flex-start;
      width: 300px;
    }
    
  }

  .column {
    background: var(--gray);
    padding: 20px;
    margin-bottom: 20px;
    width: 550px;
    height: 740px;
    display: flex;
    flex-direction: column;
    
    .splash {
      width: 500px;
      margin-bottom: 10px;
    }

  }
  

  .info {
    padding: 0 20px 20px 0;

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