import React, { Component } from "react";
import WOW from "wowjs";

class Skill extends Component {
    state = {
        name: ""
    }

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }

    render() {
        return (
            <div className="wow fadeIn" data-wow-offset="50" data-wow-delay="0.5s">
                <h1> This is a skill</h1>
            </div>
        )
    }
}

export default Skill;