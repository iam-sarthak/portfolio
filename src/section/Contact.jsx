import React from "react";
import ReactDom from "react-dom";
import "../styling/card.css";
import "../styling/contact.css";

function Contact() {
    return <div className="contact" id="contact">
<div className="contactdata">
    <h1>Contact <br /> Me</h1>
    <div className="fields">
        <ul>
            <li><a href="http://">sarmittal@gmail.com</a></li>
            <li><a href="http://">Twitter</a></li>
            <li><a href="http://">linkedIn</a></li>
            <li><a href="http://">GitHub</a></li>
        </ul>
    </div>
</div>
    </div>
}

export default Contact;