import React from 'react';
import { ThemeProvider, createTheme, Arwes, Button } from 'arwes'
import "./dropdown.css"
import {Link} from 'gatsby'

const Dropdown = () =>(


  <ThemeProvider theme={createTheme()}>
        <Arwes background='noBackground'>
          <div class="dropdown">
            <Button>Select...</Button>
            <div class="dropdown-content">
              <Link style={{display:"flex"}} to="/normal">Katrina</Link>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </Arwes>
  </ThemeProvider>

)

export default Dropdown
