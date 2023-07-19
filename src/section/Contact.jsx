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
            <li><a target="_blank" href="mailto:sarmittal@gmail.com">sarmittal@gmail.com</a></li>
            <li><a target="_blank" href="https://twitter.com/sarmittal">Twitter</a></li>
            <li><a target="_blank" href="https://github.com/iam-sarthak">linkedIn</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/sarthak-mittal-/">GitHub</a></li>
        </ul>
    </div>
</div>
    </div>
}

export default Contact;