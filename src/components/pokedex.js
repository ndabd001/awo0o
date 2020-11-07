import React from 'react';
import { ThemeProvider, createTheme, Arwes, Button, Frame, Image } from 'arwes'
import "./pokedex.css"
import Key_K from "../images/Key_K.png";


const Pokedex = () => (
    <Frame animate level={1} corners={3}>
        <Image animate resources='/static/img/wallpaper.jpg'>
                
        </Image>
        <p>An SciFi Project</p>
    </Frame>
)

export default Pokedex;