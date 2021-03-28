import React from 'react'
import {Link} from 'gatsby'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from "styled-components"
import styled from 'styled-components'
import "@fontsource/poppins"
import "@fontsource/poppins/700.css"

const GlobalStyle = createGlobalStyle`
	:root {
		--highlight: #4DC0D3;
	}
  body {
    margin: 0;
		font-family: "Poppins";
  }
`
const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
  min-height: 100vh;
	background: black;
	color: white;
  display: flex;
  padding: 0;
  margin: 0 auto;

	nav ul {
		list-style-type: none;
		display: flex;
		padding: 0;
		margin: 0;

		li{
			display: flex;
			margin: 0 0 0 2rem;
			
			a {
				display: block;
				padding: 20px 30px;
				text-decoration: none;
				color: #ffffff;

				&:hover {
					color: var(--highlight);
				}
			}
		}
		li:first-child {
			background: white;
			margin: 0;
			a {
				color: black;
				&:hover {
					color: #4DC0D3;
				}
			}
		}
	}

  nav {
	  font-size: 1.25rem;
		h1 {
			font-size: 1.25rem;
			margin: 0;
			padding: 0;
		}
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
						<ul>
							<li>
								<h1><Link to='/'>Doug Leinen</Link></h1>
							</li>
							<li>
								<a href="">Resume</a>
							</li>
							<li>
								<a href="">Email</a>
							</li>
						</ul>
					</nav>
				</header>
				<main>
					{props.children}
				</main>
			</StyledDiv>
		</>
  )
}