import React, { Component } from 'react';
import github from '../media/icons/github.svg';
import linkedin from '../media/icons/linkedin.svg';
import codepen from '../media/icons/codepen.svg';
import twitter from '../media/icons/icon-twitter.svg';

var style = {
    visibility: "hidden"
}
var hoverStyle = {
    color: "white"
}

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false,
            style: style
        }
    }

    handleMouseHover = () => {
        this.setState(this.toggleHoverState)
        if (this.state.style == hoverStyle)
            this.setState({style: style})
    }

    toggleHoverState = (state) => {
        return {
            isHovering: !state.isHovering,
            style: hoverStyle
        }
    }

    render() {
        return(
            <footer>
                <hr/>
                <div id="footer-container"
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                >
                    <ul className="media-links" className="inline-list">
                        <li><a href="https://www.github.com/AceroM"> <img src={github} className="logo"/></a></li>
                        <li><a href="https://www.linkedin.com/in/miguel-acero-238b88148/"> <img src={linkedin} className="logo"/></a></li>
                        <li><a href="https://codepen.io/maceroni/"> <img src={codepen} className="logo"/></a></li>
                        <li><a href="https://twitter.com/MiguelBAcero"> <img src={twitter} className="logo"/></a></li>

                    </ul>
                    <a id="email" 
                        href="mailto:miguel.acero81@myhunter.cuny.edu?subject=hello">
                        miguel.acero81@myhunter.cuny.edu</a>
                    <p style={this.state.style}> Designed with 💖 by Miguel Acero</p>
                </div>
            </footer>
        )
    }
}

export default Footer;