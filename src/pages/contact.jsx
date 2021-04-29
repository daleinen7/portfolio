import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 70px;

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
    background: linear-gradient(180deg, var(--background) 50%, var(--highlight) 50%);
    padding: 0 7px;
    margin: 0 -7px;
  }

  .portrait {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    width: 45%;
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

export default function contact() {
  return(
    <Layout title="contact">
      <StyledDiv>
        <div className="introText">
          <h2><span className="doug">Contact<span></span></span></h2>
          <ul>
            <li><a href="mailto:daleinen@gmail.com">daleinen@gmail.com</a></li>
            <li>773.992.6588</li>
          </ul>
        </div>
      </StyledDiv>
    </Layout>
  )
}