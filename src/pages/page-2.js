import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const divStyle = {
  position: 'fixed',
  top: '0px',
};

const SecondPage = () => (
  <Layout>
    <SEO title="Katrina" />

    <Link style={divStyle} to="/">Go back</Link>

  </Layout>
)

export default SecondPage
