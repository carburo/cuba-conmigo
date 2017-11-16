import React from "react"
import Fade from "../Transitions/Fade"
import CallToAction from "../CallToAction"
import Services from "./Services"
import Slider from "./Slider"
import Hero from "./Hero"

export default class Home extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Hero />
                <Services />
                <CallToAction dark
                              title="Make the Move"
                              subtitle="Considering migrating from Maven? We've got resources to help."
                              option1="Learn more"
                              link1="/services"
                              option2="Contattaci"
                              link2="/contact"
                />
                <Slider />
            </Fade>
        );
    }
}