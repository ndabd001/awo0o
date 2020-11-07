import React from 'react';
import { ThemeProvider, createTheme, Arwes, Button, Frame, Image, Project, Words } from 'arwes'
import "./pokedex.css"
import Key_K from "../images/Key_K.png";


const Pokedex = () => (
    <ThemeProvider theme={createTheme()}>
        <Arwes background='noBackground'>
            <Button onClick={() => this.onToggle()}> Magic </Button>
                <div style={{position:"inline-block", padding:"20px", maxWidth: "80%", maxHeight:"90%"}}>
                    <Frame animate corners={3} border={false}>
                        <div style={{width:"26%"}}>
                            <Frame animate border={false}>
                                <h1 style={{textAlign:"left", padding:20, color:"#0F4AE8", marginBottom:"0px"}}>Katrina Hakimian</h1>
                            </Frame>
                        </div>
                        <div style={{ position:"relative", top:"-115px", paddingTop: 20, paddingLeft: 15, maxWidth:"30%", display:"inline-block", alignItems:"right"}}>
                            <div style={{width:"50%"}}> 
                                <Frame animate border={false}>
                                        <h1 style={{padding:20,marginBottom:"0px", textAlign:"center"}}>Stats</h1>
                                </Frame>
                            </div>
                            <Frame animate border={false}>
                                <ul style={{maxWidth:"340px",padding:20}}>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. 
                                    </li>
                                    <li>Blonde</li>
                                    <li>Armenian</li>
                                    <li>Pretentious</li>
                                    <li>Low-key Insecure</li>
                                </ul>
                            </Frame>
                        </div>
                        <img style={{width:"350px", display:"inline-block", padding:20}} src={Key_K}>
                        </img>
                        <img style={{width:"300px", display:"inline-block", padding:20}} src={Key_K}>
                        </img>
                        <img style={{width:"300px", display:"inline-block", padding:20}} src={Key_K}>
                        </img>
                        
                        <div style={{ padding: 20, position:"block" }}>
                            <Project
                                animate
                                header='PROJECT, OFFICIA DESERUNT ANIM ID EST LABORUM'
                            >
                                {anim => (
                                    <p><Words animate show={anim.entered}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. 
                                    </Words></p>
                                )}
                            </Project>
                        </div>
                    </Frame>
                </div>
        </Arwes>
  </ThemeProvider>
        
)

export default Pokedex