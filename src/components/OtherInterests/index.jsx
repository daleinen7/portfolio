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
          copy="I have a home studio that I use to mix and master music in. Fun Fact: I am certified to run an SSL 4000."
          img={audioEngineering}
          key={1}
        />
        <InterestBlock
          title="Game Development"
          copy="Many of the basic concepts of programming I learned from developing indie games in my free time."
          img={game}
          key={2}
        />
        <InterestBlock
          title="Guitars and Keys"
          copy="I play guitar and program synthesizers when no one is around."
          img={instrument}
          key={3}
        />
        <InterestBlock
          title="Cooking"
          copy="Yet another outlet that allows art, science and techique to converge into something extremely useful."
          img={cooking}
          key={4}
        />
        <InterestBlock
          title="Picture Framing"
          copy="I spent 15 years in the framing industry. This prepared me to work on a team and gather a good sense of basic design principles."
          img={pictureframing}
          key={5}
        />
      </div>
    </StyledDiv>
  )
}