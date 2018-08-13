//  The intro part of the webpage
import React, { Component } from 'react';
import miguel from '../media/photos/miguelCropped.png';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
let arr = ["to code 🖥️", "to play fighting games", "to sleep 😴", "to design", "to eat food 🍣"]

class Top extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let particleStyle = {
            position: 'absolute',
        }
        return( 
            <header className="top">
                <div className="description">
                    <Particles style={particleStyle}
                        params={{
                            "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    },
                                },
                                "modes": {
                                    "repulse": {
                                        "distance": 200,
                                        "duration": 0.4
                                    },
                                    "push": {
                                        "particles_nb": 4
                                    },
                                    "remove": {
                                        "particles_nb": 2
                                    }
                                }
                            },
                        }}
                    />
                    <p id="title"> Hi, my name is <span id="name"> Miguel Acero </span></p>
                    <p> A student and aspiring web developer studying <strong>Computer Science</strong> at Hunter College </p>
                    <br/>
                    <div id="liketo">
                        <p> I like </p>
                        <Typed
                            strings={arr} 
                            typeSpeed={40} 
                            loop
                        />
                    </div>
                </div>
            </header>
        )
    }
    
}

export default Top;