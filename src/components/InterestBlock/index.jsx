import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 250px;
  height: 190px;
  background: var(--gray);
  padding: 20px;
  margin: 6px;

  .interestHeading {
    display: flex;
    align-items: baseline;
    height: 57px;
  }

  h3 {
    font-size: 1rem;
    font-weight: semi-bold;
    margin-left: 1rem;
    align-self: flex-end;
  }
  p {
    font-size: 0.86rem;
    margin-top: 0;
  }
`;

export default function InterestBlock(props) {
  return (
    <StyledDiv>
      <div className="interestHeading">
        <img src={props.img} alt={props.img} />
        <h3>{props.title}</h3>
      </div>
      <p>{props.copy}</p>
    </StyledDiv>
  );
}
