import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import BackgroundImage from "../components/image"
import SEO from "../components/seo"
import { ThemeProvider, createTheme, Arwes, Button, Frame } from 'arwes'

const IndexPage = () => (
  <Layout>
    <SEO title="Awo0o" />

    <ThemeProvider theme={createTheme()}>
      <Arwes background='noBackground'>
        <Button animate>Select...</Button>
      </Arwes>
    </ThemeProvider>

  </Layout>
);

export default IndexPage
