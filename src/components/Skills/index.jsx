import React from 'react'
import styled from 'styled-components';
import SkillBlock from '../SkillBlock';

const StyledDiv = styled.div`
  width: 95%;
  margin: 0 auto;
  h2 {
    font-size: 1.1rem;
    font-weight: bold;
  }
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }

`;

export default function Skills() {
  return(
    <StyledDiv>
      <h2>Top Skills</h2>
      <ul>
          <SkillBlock
            skill="HTML / CSS / Javascript"
            copy="While I love diving into new technology I value the importance of the fundamentals of front end development"
          />
          <SkillBlock
            skill="Problem Solving"
            copy="I list the technology I've used in the past below, but ultimately it's the ability to see a problem and find out how to resolve it that is the most important skill I possess."
          />
          <SkillBlock
            skill="JAMstack"
            copy="It's always enjoyable to work with a powerful monolyth like Django or Rails, but there's something about the simplicity and speed of JAMstack that's captured my attention. My favorite is Gatsby, but I like the flexibilty NextJS has even when not using a 100% JAMstack approach."
          />
      </ul>
      <h2>{"<more skills>"}</h2>
      <ul>
        <li>NodeJS</li>
        <li>Python</li>
        <li>Django</li>
        <li>Rest API</li>
        <li>GraphQL</li>
        <li>PostgreSQL</li>
        <li>Express</li>
        <li>React</li>
        <li>Next</li>
        <li>Gatsby</li>
        <li>SEO</li>
        <li>AWS</li>
        <li>SASS</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Ruby / Rails / Jekyll</li>
        <li>PHP</li>   
      </ul>
      <h2>Skills outside of Software Development</h2>
      <ul>
        <li>Conflict Resolution</li>
        <li>Management</li>
        <li>Employee Training</li>
        <li>Customer Service</li>
        <li>Design Principles</li>
        <li>Audio Editing</li>
        <li></li>
      </ul>
    </StyledDiv>
  )
}