import React, { Component } from 'react';
import Anime from 'react-anime';
import { Parallax, Background } from 'react-parallax';
import Fade from 'react-reveal/Fade'
import miguel from '../media/photos/miguel.jpg'

let hoverStyle = {
}

class Home extends Component {
    state = {
        isHover: false,
        isScroll: false
    }

    render() {
        return(
            <div className="main" id="home">
                <Fade up>
                <div class="img-wrapper">
                    <img id="miguel" src={miguel} width="40%"/>
                </div>
                <h1> About Me </h1>
                <div className="textContainer">
                    <p> I'm currently in my third year in Hunter College studying Computer Science </p>
                </div>
                <div className="hunter">
                    <h2> Major in Computer Science </h2>
                    <h3> Minor in Japanese 🇯🇵 </h3>
                </div>
                <button> View Resume </button>
                <div className="skills">
                </div>
                </Fade>
            </div>
        )
    }
}

export default Home