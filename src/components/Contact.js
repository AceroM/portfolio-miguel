import React, { Component } from 'react';

let h1style = { 
    display: "inline-block",
    "padding-left": "10px",
    position: "relative",
    "bottom": "5px"
}

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onHover: true
        }
    }

    render() {
        return(
            <div id="contact">
                <div>
                    <form method="POST" action="https://formspree.io/miguelacero528@gmail.com" className="information">
                        <div className="form-title">
                            <svg width="70px" viewBox="0 0 512 262" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M146.659.521v33.925H0v15.657h146.659v73.068H25.052v15.657h121.607v28.705H48.016v15.657h98.642v78.287H512V.521H146.659zm349.684 245.301H162.316V23.295l167.01 115.661 123.14-85.169-8.907-12.878-114.227 79.006L179.543 16.178h316.799v229.644h.001zM0 211.897h15.658v15.658H0z"></path><path d="M33.925 211.897h97.598v15.658H33.925zM0 78.808h15.658v15.658H0zM33.925 78.808h97.598v15.658H33.925z"></path></g></svg>
                            <h1 style={h1style}> Contact Me </h1>
                        </div>
                        <section className="contactInformation">
                            <label for="name"> Name: </label>
                            <input id="name" type="text" name="Name" placeholder="Name" required="required"/>
                            <label for="email"> Email: </label>
                            <input type="email" name="email" placeholder="Your email"/>
                        </section>
                        <section className="message">
                            <label for="message"> Message: </label>
                            <textarea name="message" placeholder="Your message"></textarea>
                            <button type="submit">Send</button>
                        </section>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;