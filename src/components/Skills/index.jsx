  import React from 'react'
  import styled from 'styled-components';
  import SkillBlock from '../SkillBlock';
  import jamstack from '../../images/jamstack.png';
  import reactIcon from '../../images/React-icon.svg';
  import lightBulb from '../../images/light-bulb.svg';

  const StyledDiv = styled.div`
    width: 95%;
    margin: 0 auto;

    h2 {
    margin-left: 40px;
      font-size: 1.1rem;
      font-weight: bold;
    }

    .topSkills {
      display: flex;
      flex-wrap: wrap;
    }

    .moreSkills{
      font-size: 6.6rem;
      font-weight: bold;
      color: var(--gray);
      margin-top: 0;
      margin-bottom: 0;
    }

    ul {
      margin: 0 auto;
      list-style-type: none;
      padding: 0;
      display: flex;
      justify-content: space-around;
    }

    .skillList {
      display: flex;
      flex-wrap: wrap;
      margin-top: 0;
      color: var(--lite-gray);
      max-width: 800px;
      li {
        margin-left: 2em;
      }
    }

    .otherSkills {
      color: var(--lite-gray);
      font-size: 2rem;
    }

  `;

  export default function Skills() {
    return(
      <StyledDiv>
        <h2>Top Skills</h2>
        <ul className="topSkills">
            <SkillBlock
              skill="Jamstack"
              copy="The simplicity and speed of Jamstack is very alluring. My favorite framework is Gatsby, but I like the flexibilty and power NextJS has even when not using a 100% Jamstack approach."
              img={jamstack}
            />
            <SkillBlock
              skill="React"
              copy="The React work flow when coupled with Gatsby or NextJS makes for a very flexible and maintainable project. In fact this site was made in Gatsby."
              img={reactIcon}
            />
            <SkillBlock
              skill="Problem Solving"
              copy="I list the technology I've used in the past below, but ultimately it's the ability to see a problem and find out how to resolve it that is the most important skill I possess."
              img={lightBulb}
            />
        </ul>
        <h2 className="moreSkills">{"<more skills>"}</h2>
        <ul className="skillList">
          <li>NodeJS</li>
          <li>Python</li>
          <li>Django</li>
          <li>SASS</li>
          <li>GraphQL</li>
          <li>Rest API</li>
          <li>Express</li>
          <li>React</li>
          <li>Next</li>
          <li>Gatsby</li>
          <li>11ty</li>
          <li>Jekyll</li>
          <li>SEO</li>
          <li>AWS</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>FaunaDB</li>
          <li>MySQL</li>
        </ul>
        <h2 className="otherSkills">Skills outside of Software Development</h2>
        <ul className="skillList">
          <li>Conflict Resolution</li>
          <li>Management Experience</li>
          <li>Design Principles</li>
          <li>Employee Training</li>
          <li>Customer Service</li>
          <li>Photography</li>
          <li>Photoshop</li>
          <li>Audio Editing</li>
          <li></li>
        </ul>
      </StyledDiv>
    )
  }