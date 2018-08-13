import React from "react";
import { stack as Menu } from "react-burger-menu";
import home from "../media/icons/home.svg"
import projects from "../media/icons/projects.svg"
import contact from "../media/icons/contact.svg"
import { Link } from 'react-router-dom';

var state = {
    isOpen: false
}

function handleTwoOpens() {
    handleOpen();
    handleOpen();
}

function handleOpen() {
    state.isOpen = !state.isOpen;
}

function link(item, key, root = false) {
    const lower = item.toLowerCase();
    let linkTo = `/${lower}`

    return (
        <Link onClick={handleTwoOpens} to={lower == "home" ? "/" : linkTo} key={key} id={lower} className="menu-item"> 
            <img src={lower == "home" ? home : lower == "projects" ? projects : contact} className="icon"/>
                {item}
        </Link>
    );
}

const links = ["Home", "Projects", "Contact"];

export default props => {
    return (
        <Menu onClick={handleOpen} isOpen={state.isOpen} {...props}>
            {links.map((name, i) => {
                return link(name, i, name === "Home");
            })}
        </Menu>
    );
};
