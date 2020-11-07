import React from 'react';
import { ThemeProvider, createTheme, Arwes, Button } from 'arwes'
import "./dropdown.css"

const Dropdown = () =>(


  <ThemeProvider theme={createTheme()}>
        <Arwes background='noBackground'>
          <div class="dropdown">
            <Button>Select...</Button>
            <div class="dropdown-content">
              <a href="#">Katrina</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </Arwes>
  </ThemeProvider>

)

export default Dropdown
