import React from "react";
import HeroContent from "../components/HeroContent";
import "../styling/hero.css"
import HeroBackground from "../components/HeroBackground";


function Hero() {
    return <div>
        <HeroBackground />
        <HeroContent />
    </div>
}

export default Hero;