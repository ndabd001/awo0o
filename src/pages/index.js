import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import BackgroundImage from "../components/image"
import SEO from "../components/seo"
import Dropdown from "../components/dropdown"


const IndexPage = () => (
  <Layout>
    <SEO title="Awo0o" />

    <Dropdown style={{position:"fixed", top:"47%", right:"75%"}}></Dropdown>

  </Layout>
);

export default IndexPage;
