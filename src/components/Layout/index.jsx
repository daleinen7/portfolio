import React from 'react'
import {Link} from 'gatsby'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from "styled-components"
import styled from 'styled-components'
import "@fontsource/poppins"
import "@fontsource/poppins/700.css"
import linkedIn from '../../images/linkedin.svg'
import contact from '../../images/email.svg';
import resume from '../../images/resume.svg';
import github from '../../images/github.svg';

const GlobalStyle = createGlobalStyle`
	:root {
		--highlight: #4DC0D3;
		--background: #101010;
		--gray: #2C2C2C;
		--lite-gray: #a0a0a0;
	}
	*, *::before, *::after {
		box-sizing: border-box;
	}
  body {
    margin: 0;
		background: var(--background);
		font-family: "Poppins";
  }
`

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
  min-height: 100vh;
	background: var(--background);
	color: white;
  display: flex;
  padding: 0;
  margin: 0 auto;

	header {
		width: 100%;
	}

	nav {
		font-size: 1.25rem;

		h1 {
			float: left;
			font-size: 1.25rem;
			margin: 0;
			padding: 0;
			@media(max-width: 450px) {
				float: none;
			}
		}
		
		ul {
			list-style-type: none;
			display: flex;
			padding: 0;
			margin: 0;
			background: var(--background);
			@media(max-width: 450px) {
				justify-content: space-evenly;
			}
		}

		li{
			display: flex;
			margin: 0 0 0 2rem;

			@media(max-width: 900px) {
				margin: 0;
			}
			
			a {
				display: block;
				padding: 20px 30px;
				text-decoration: none;
				color: #ffffff;

				&:hover {
					color: var(--highlight);
				}
				span.icon {
					display: none;
				}

				@media(max-width: 740px) {
					padding: 10px 30px 5px 30px;
					
					span.icon {
						display: inline-block;
					}
					span.text {
						display: none;
					}
				}

				@media(max-width: 600px) {
					padding: 10px 20px 5px 20px;
				}

				@media(max-width: 520px) {
					padding: 10px 10px 5px 10px;
				}
			}
		}

		h1 {
			background: white;
			width: 186px;
			margin: 0;
			a {
				display: block;
				padding: 20px 30px;
				text-decoration: none;
				color: #ffffff;

				&:hover {
					color: var(--highlight);
				}
				padding: 20px 30px;
				color: black;
				&:hover {
					color: #4DC0D3;
				}
			}

			@media(max-width: 450px) {
				width: 100%;
			}
		}
	}

	header {
		position: fixed;
		z-index: 5;
	}

	main {
		position: static;
		z-index: 1;
	}

	footer {
		text-align: center;
		margin: 2rem 0 1rem 0;
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
				</Helmet>
				<header>
					<nav> 
						<h1><Link to='/'>Doug Leinen</Link></h1>
						<ul>	
							<li>
								<a href="/Doug_Leinen-Resume.pdf"><span className="text">Resume</span><span className="icon"><img src={resume} width="45" alt="Resume"/></span></a>
							</li>
							<li>
								<a href="https://github.com/daleinen7"><span className="text">Github</span><span className="icon"><img src={github} width="45" alt="Github"/></span></a>
							</li>
							<li>
								<Link to="/contact"><span className="text">Contact</span><span className="icon"><img src={contact} width="45" alt="Contact"/></span></Link>
							</li>
							<li>
								<a href="https://www.linkedin.com/in/doug-leinen/"><span className="text">LinkedIn</span><span className="icon"><img src={linkedIn} width="45" alt="LinkedIn"/></span></a>
							</li>
						</ul>
					</nav>
				</header>
				<main>
					{props.children}
				</main>
				<footer>
					&copy; {new Date().getFullYear()} Doug Leinen
				</footer>
			</StyledDiv>
		</>
  )
}