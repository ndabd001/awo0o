import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeProvider, createTheme, Row, Col } from 'arwes';
import Pokedex from "../components/pokedex"

//page wrapper containing normal character screen styling & orientations.
const normalScreen = () => {
  return(
    <Layout>

      <ThemeProvider theme={createTheme()}>
        <Row col s={1} l={1}>
            <Pokedex></Pokedex>
          <Col l={2}>
            <Col> 
            <Row></Row>
            <Row>
              charList is a button which links to other char normal pages
              <charList></charList>

            </Row>
            <Row>
              button that routes to magicScreen page
              <button></button>
            </Row>
            </Col>
            <Col>
            the sliver of magic side will be housed here. this col will contain onHover effect to encourage transition to magic page
            </Col>
          </Col>
        </Row>
      </ThemeProvider>

    </Layout>
  )
}


export default normalScreen;
