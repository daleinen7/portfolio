import React from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 200px;

  .introText {
    position: relative;
    width: 45%;
    max-width: 800px;
    margin-top: 100px;
    margin-left: 5%;
    z-index: 2;
    p:last-of-type {
      margin-bottom: 50px;
    }
  }

  h2 {
    font-size: 2.9375rem;
    font-weight: bold;
    max-width: 590px;
  }

  .doug {
    height: 100%;
    background: linear-gradient(180deg, #000 50%, var(--highlight) 50%);
    padding: 0 7px;
    margin: 0 -7px;
  }

  .portrait {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    width: 60%;
  }

  .button {
    border: solid 1px #8a8a8a;
    border-radius: 4px;
    text-decoration: none;
    padding: 10px 20px;
    font-weight: bold;
    color: #a9a9a9;
    &:hover {
      color: var(--highlight);
      background: var(--gray);
    }
  }

`;

export default function () {
  return(
    <StyledDiv>
      <div className="introText">
        <h2>Hello, I'm <span className="doug">Doug<span></span></span>. I am a Web Developer</h2>
        <p>
          I am a software engineer with an obsession to meld the rigid logic of programming and the boundless possibilities of art and ideas. I love how form and function combine to improve our lives to make information and tools clearer and more accessible.
        </p>
        <p>
          I love the process of turning the intagible into reality through technology.
        </p>
        <a className="button" href="#">Portfolio</a>
      </div>
      <StaticImage className="portrait" src="../images/portrait.png" alt="Portrait of Doug Leinen"/>
    </StyledDiv>
  )
}