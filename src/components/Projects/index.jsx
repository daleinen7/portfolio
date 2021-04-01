import React from 'react';
import styled from 'styled-components';
import ProjectBlock from '../ProjectBlock';
import dotsAndBoxes from '../../images/dots-and-boxes.svg';
import collabratory from '../../images/collabratory.svg';
import seabound from '../../images/seabound.svg';
import colEcho from '../../images/colEcho.svg';
import adch from '../../images/adch.svg';

const StyledDiv = styled.div`
  width: 95%;
  margin: 0 auto;
  .projectGrid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`; 

export default function Projects() {
  return(
    <StyledDiv>
      <h2>Projects</h2>
      <div className="projectGrid">
        <ProjectBlock
          title="Astro Defense Code Hero"
          sub="A typing game to practice web development knowledge"
          copy="A game developed in React where you defend an orbital space station from asteroids by answering questions relating to web development technologies \n One of the most exciting aspects of this project was building a rudimentary animation system to track the astroids as they progressed across the screen"
          techUsed={['React', 'Node.JS', 'MongoDB']}
          img={adch}
        />
        <ProjectBlock
          title="Col-Echo"
          sub="An online open-mic platform"
          copy="Project built with a team of 3 using Django. I lead the backend development but had a hand in the direction of the front end design.

          This project is a prototype and is currently being rebuilt using NextJS"
          techUsed={['Django', 'AWS', 'Markdownify', 'Bulma']}
          img={colEcho}
        />
        <ProjectBlock
          title="Seabound"
          sub="Work in progress pixel art adventure game"
          copy="built in Construct 3. Between writing, art, audio, programming and managing a small group, this project demonstrates my versitility.

          This project is a work in progress."
          techUsed={['Construct 3', 'Aseprite']}
          img={seabound}
        />
        <ProjectBlock
          title="Dots and Boxes and Synthesizers"
          sub="A simple game of dots and boxes with a musical twist"
          copy="An experimental game built with Javascript that takes the classic pass time and adds an experimental musical composition element."
          techUsed={['HTML', 'CSS', 'Javascript']}
          img={dotsAndBoxes}
        />
        <ProjectBlock
          title="The Collabratory"
          sub={'Experimental User Submitted "Oblique Strategies-Like"'}
          copy="A game developed in React where you defend an orbital space station from asteroids by answering questions relating to web development technologies \n One of the most exciting aspects of this project was building a rudimentary animation system to track the astroids as they progressed across the screen"
          techUsed={['Node.JS', 'Express', 'MongoDB', 'Mongoose']}
          img={collabratory}
        />
      </div>
    </StyledDiv>
  )
} 