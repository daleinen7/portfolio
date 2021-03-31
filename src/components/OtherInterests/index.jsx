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
        copy="I've spent time as an audio engineer for a commercial production house in Chicago. I still do mastering work for musicians when I have the time. Check out my page explaining that coming soon."
        img="audio"
      />
      <InterestBlock
        title="Game Development"
        copy="Many of the basic concepts of programming I learned from my time developing indie games in my free time."
        img="game"
      />
      <InterestBlock
        title="Guitars and Synthesizers"
        copy="I play guitar and program synthesizers when no one is around."
        img="keyboard"
      />
      <InterestBlock
        title="Cooking"
        copy="Yet another outlet that allows art, science and techique to converge into something extremely useful."
        img="cooking"
      />
      <InterestBlock
        title="Picture Framing"
        copy="I spent 15 years in the framing industry. This prepared me to work on a team and gather a good sense of basic design principles."
        img="pictureframing"
      />
    </StyledDiv>
  )
}