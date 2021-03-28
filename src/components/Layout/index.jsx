import React from 'react'
import {Link} from 'gatsby'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from "styled-components"
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`
const StyledDiv = styled.div`
  min-height: 100vh;
	background: black;
	color: white;
  display: flex;
  padding: 0;
  margin: 0 auto;
  main {
    margin: 0 auto;
  }
`;

export default function Layout(props) {
  return(
		<>
			<GlobalStyle/>
			<StyledDiv>
				<Helmet>
					<meta charSet="utf-8" />
					<title>Doug | {props.title}</title>
					<link rel="canonical" href="http://mysite.com/example" />
				</Helmet>
				<header>
					<nav>
						<li>
							<h1><Link to='/'>Doug Leinen</Link></h1>
						</li>
						<li>
							<a href="">Resume</a>
						</li>
						<li>
							<a href="">Email</a>
						</li>
					</nav>
				</header>
				<main>
					{props.children}
				</main>
			</StyledDiv>
		</>
  )
}