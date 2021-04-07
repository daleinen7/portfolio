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

    @media(max-width: 600px) {
      margin-bottom: 0;
    }
  }

  .row {
    background: var(--gray);
    padding: 20px;
    margin-bottom: 20px;
    width: 550px;
    height: 360px;
    display: flex;
    flex-direction: row;

    @media(max-width: 600px) {
      flex-direction: column;
      padding: 20px 0;
      height: auto;
    }

    .info {
      align-self: flex-start;
      margin-left: 20px;

      @media(max-width: 600px) {
        padding-bottom: 0;
      }
    }
    
    .splash {
      align-self: flex-start;
      width: 255px;
      @media(max-width: 600px) {
        width: 100%;
        margin-bottom: 10px;
      }
    }
    
    @media(max-width: 600px){
      width: 100%;
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

    @media(max-width: 600px) {
      padding: 20px 0;
      height: auto;
    }
    
    .splash {
      width: 510px;
      margin-bottom: 10px;
      @media(max-width: 600px) {
        width: 100%;
      }
    }

    @media(max-width: 600px){
      width: 100%;
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
        <a href={props.link}><img src={props.img} alt={props.title} className="splash"/></a>
        <div className="info">
          <a href={props.link}><h3>{props.title}</h3></a>
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