import React from "react"
import Fade from "components/Transitions/Fade"
import CallToAction from "./CallToAction"
import Services from "./Services"
import Slider from "./Slider"
import Hero from "./Hero"

export default class Home extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Hero />
                <Services />
                <CallToAction />
                <Slider />
            </Fade>
        );
    }
}