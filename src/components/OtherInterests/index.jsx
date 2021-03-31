import React from 'react';
import InterestBlock from '../InterestBlock';
import styled from 'styled-components';
import audioEngineering from '../../images/audio.svg';
import game from '../../images/game.svg';
import instrument from '../../images/instrument.svg';
import cooking from '../../images/cooking.svg';
import pictureframing from '../../images/pictureframing.svg';


const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;

  .interestsGrid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 70%;
  }
`;

export default function OtherInterests() {
  return(
    <StyledDiv>
      <h2>Other Interests</h2>
      <div className="interestsGrid">
        <InterestBlock
          title="Audio Engineering"
          copy="I've spent time as an audio engineer for a commercial production house in Chicago. I still do mastering work for musicians when I have the time. Check out my page explaining that coming soon."
          img={audioEngineering}
        />
        <InterestBlock
          title="Game Development"
          copy="Many of the basic concepts of programming I learned from my time developing indie games in my free time."
          img={game}
        />
        <InterestBlock
          title="Guitars and Keys"
          copy="I play guitar and program synthesizers when no one is around."
          img={instrument}
        />
        <InterestBlock
          title="Cooking"
          copy="Yet another outlet that allows art, science and techique to converge into something extremely useful."
          img={cooking}
        />
        <InterestBlock
          title="Picture Framing"
          copy="I spent 15 years in the framing industry. This prepared me to work on a team and gather a good sense of basic design principles."
          img={pictureframing}
        />
      </div>
    </StyledDiv>
  )
}