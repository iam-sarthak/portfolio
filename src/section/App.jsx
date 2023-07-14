import React from "react";
import ReactDom from "react-dom";
import Header from "./Header";
import Hero from "./Hero";
import "../styling/app.css";
import Card from "./Card";
import Contact from "./Contact";
import About from "./About";

function App() {
    return <div>
<Header />

<Hero />
<About />
<Card />
<Contact />
    </div>
}

export default App;