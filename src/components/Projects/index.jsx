import React from 'react';
import styled from 'styled-components';
import ProjectBlock from '../ProjectBlock';
import dotsAndBoxes from '../../images/dots-and-boxes.jpg';
import collabratory from '../../images/collabratory.jpg';
import seabound from '../../images/seabound.jpg';
import colEcho from '../../images/colEcho.jpg';
import adch from '../../images/adch.jpg';

const StyledDiv = styled.div`

  h2 {
    margin-left: 40px;
  }
  
  .projectGrid {
    display: flex;
    flex-wrap: wrap;
    max-width: 1160px;
    margin: 0 auto;
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
          link={'https://astro-defense-code-hero.herokuapp.com/'}
          github={'https://github.com/daleinen7/astro-defense-code-hero'}
        />
        <div className="horizontalBlock">
          <ProjectBlock
            title="Col-Echo"
            sub="An online open-mic platform"
            copy="Project built with a team of 3 using Django. I lead the backend development but had a hand in the direction of the front end design. This project is a prototype and is currently being rebuilt using NextJS"
            techUsed={['Django', 'AWS']}
            img={colEcho}
            direction="row"
            link={'https://col-echo.herokuapp.com/'}
            github={'https://github.com/daleinen7/col-echo-django'}
          />
          <ProjectBlock
            title="Seabound"
            sub="Work in progress pixel art adventure game"
            copy="built in Construct 3. Between writing, art, audio, programming and managing a small group, this project demonstrates my versitility. This project is a work in progress."
            techUsed={['Construct 3', 'Aseprite']}
            img={seabound}
            direction="row"
            link={'https://pixelisfaded.itch.io/seabound'}
            github={'https://github.com/daleinen7/seabound-adventure'}
          />
        </div>
        <ProjectBlock
          title="Dots and Boxes and Synthesizers"
          sub="A simple game with a musical twist"
          copy="Experimental Javascript game that takes the classic pass time and adds an experimental musical element."
          techUsed={['HTML', 'CSS', 'Javascript']}
          img={dotsAndBoxes}
          direction="row"
          link={'https://daleinen7.github.io/dots-and-boxes-and-synthesizers/'}
          github={'https://github.com/daleinen7/dots-and-boxes-and-synthesizers'}
        />
        <ProjectBlock
          title="The Collabratory"
          sub={'Experimental User Submitted "Oblique Strategies-Like"'}
          copy="Be fed suggestions on where to take your next musical project. Built with Node and Express JS."
          techUsed={['Node.JS', 'Express', 'MongoDB', 'Mongoose']}
          img={collabratory}
          direction="row"
          link={'https://the-collabratory.herokuapp.com/'}
          github={'https://github.com/daleinen7/thecollabratory'}
        />
      </div>
    </StyledDiv>
  )
} 