import React from 'react';
import styled from 'styled-components';
import ProjectBlock from '../ProjectBlock';

const StyledDiv = styled.div`
  width: 95%;
`; 

export default function Projects() {
  return(
    <StyledDiv>
      <ProjectBlock
        title="Astro Defense Code Hero"
        sub="A typing game to practice web development knowledge"
        copy="A game developed in React where you defend an orbital space station from asteroids by answering questions relating to web development technologies \n One of the most exciting aspects of this project was building a rudimentary animation system to track the astroids as they progressed across the screen"
      />
      <ProjectBlock
        title="Col-Echo"
        sub="An online open-mic platform"
        copy="Project built with a team of 3 using Django. I lead the backend development but had a hand in the direction of the front end design.

        This project is a prototype and is currently being rebuilt using NextJS"
      />
      <ProjectBlock
        title="Seabound"
        sub="Work in progress pixel art adventure game"
        copy="built in Construct 3. Between writing, art, audio, programming and managing a small group, this project demonstrates my versitility.

        This project is a work in progress."
      />
      <ProjectBlock
        title="Dots and Boxes and Synthesizers"
        sub="A simple game of dots and boxes with a musical twist"
        copy="An experimental game built with Javascript that takes the classic pass time and adds an experimental musical composition element.

        "
      />
      <ProjectBlock
        title="The Collabratory"
        sub={'Experimental User Submitted "Oblique Strategies-Like"'}
        copy="A game developed in React where you defend an orbital space station from asteroids by answering questions relating to web development technologies \n One of the most exciting aspects of this project was building a rudimentary animation system to track the astroids as they progressed across the screen"
      />
    </StyledDiv>
  )
} 