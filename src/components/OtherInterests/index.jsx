import React from 'react';
import InterestBlock from '../InterestBlock';
import styled from 'styled-components';

const StyledDiv = styled.div`
  h2 {
    text-align: center;
  }
`;
export default function OtherInterests() {
  return(
    <StyledDiv>
      <h2>Other Interests</h2>
      <InterestBlock
        title="Audio Engineering"
        copy="Before Web Development I spent time as an audio engineer for a commercial production house in Chicago. I still do mastering work for musicians when I have the time. Check out my page explaining that coming soon."
      />
    </StyledDiv>
  )
}