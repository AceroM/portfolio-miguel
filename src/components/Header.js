import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import home from '../media/icons/home.svg'
import projects from '../media/icons/projects.svg'
import contact from '../media/icons/contact.svg'

class Header extends Component {
    state = {

    }

    componentDidMount(){

    }
    
    render() {
        return(
            <header>
                <nav>
                    <ul className="nav-items">
                        <li><Link to='/'> <img src={home} width="40px"/></Link></li>
                        <li><Link to='/projects'> <img src={projects} width="40px"/> </Link></li>
                        <li><Link to='/contact'> <img src={contact} width="40px"/></Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;