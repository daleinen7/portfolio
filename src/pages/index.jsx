import * as React from "react"
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Skills from '../components/Skills';



const IndexPage = () => {
  return (
    <Layout title="Web Developer">
      <Intro/>
      <Skills/>
    </Layout>
  )
}

export default IndexPage
