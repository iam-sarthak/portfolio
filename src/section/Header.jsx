import React from "react";
import ReactDom from "react-dom";
import Logo from "../components/logo";
import NavBar from "../components/navbar";
import "../styling/header.css"

function Header() {
    return <div className="header">
        <Logo />
        <NavBar />
    </div>
}

export default Header;