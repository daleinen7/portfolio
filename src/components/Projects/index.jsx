import React from 'react';
import styled from 'styled-components';
import ProjectBlock from '../ProjectBlock';
import dotsAndBoxes from '../../images/dots-and-boxes.svg';
import collabratory from '../../images/collabratory.svg';
import seabound from '../../images/seabound.svg';
import colEcho from '../../images/colEcho.svg';
import adch from '../../images/adch.svg';

const StyledDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    margin-left: 40px;
  }
  
  .projectGrid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .horizontalBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`; 

export default function Projects() {
  return(
    <StyledDiv>
      <a id="projects"><h2>Projects</h2></a>
      <div className="projectGrid">
        <ProjectBlock
          title="Astro Defense Code Hero"
          sub="A typing game to practice web development knowledge"
          copy="Defend an orbital space station from asteroids by answering questions relating to web development technologies. A custom rudimentary React animation system moves astroids across the screen"
          techUsed={['React', 'MongoDB']}
          img={adch}
          direction="column"
        />
        <div className="horizontalBlock">
          <ProjectBlock
            title="Col-Echo"
            sub="An online open-mic platform"
            copy="Project built with a team of 3 using Django. I lead the backend development but had a hand in the direction of the front end design. This project is a prototype and is currently being rebuilt using NextJS"
            techUsed={['Django', 'AWS']}
            img={colEcho}
            direction="row"
          />
          <ProjectBlock
            title="Seabound"
            sub="Work in progress pixel art adventure game"
            copy="built in Construct 3. Between writing, art, audio, programming and managing a small group, this project demonstrates my versitility. This project is a work in progress."
            techUsed={['Construct 3', 'Aseprite']}
            img={seabound}
            direction="row"
          />
        </div>
        <ProjectBlock
          title="Dots and Boxes and Synthesizers"
          sub="A simple game with a musical twist"
          copy="Experimental Javascript game that takes the classic pass time and adds an experimental musical element."
          techUsed={['HTML', 'CSS', 'Javascript']}
          img={dotsAndBoxes}
          direction="row"
        />
        <ProjectBlock
          title="The Collabratory"
          sub={'Experimental User Submitted "Oblique Strategies-Like"'}
          copy="Be fed suggestions on where to take your next musical project. Built with Node and Express JS."
          techUsed={['Node.JS', 'Express', 'MongoDB', 'Mongoose']}
          img={collabratory}
          direction="row"
        />
      </div>
    </StyledDiv>
  )
} 