import React from 'react';
import { ThemeProvider, createTheme, Arwes, Button } from 'arwes'
import "./dropdown.css"

const Dropdown = () =>(


  <ThemeProvider theme={createTheme()}>
        <Arwes background='noBackground'>
          <div class="dropdown">
            <Button>Select...</Button>
            <div class="dropdown-content">
<<<<<<< HEAD
              <a href="#">Katrina</a>
=======
              <a href="page-2">Link 1</a>
>>>>>>> 3307158ba8951b95871597e0e851ad94203056d6
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </Arwes>
  </ThemeProvider>

)

export default Dropdown
