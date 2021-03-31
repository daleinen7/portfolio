import * as React from "react"
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import OtherInterests from '../components/OtherInterests';
import Projects from '../components/Projects';

const IndexPage = () => {
  return (
    <Layout title="Web Developer">
      <Intro/>
      <Skills/>
      {/* shrink top/bottom */}
      <OtherInterests/>
      {/* shrink top/bottom */}
      <Projects/>
    </Layout>
  )
}

export default IndexPage
