import React from "react"
import {Container, Jumbotron} from "reactstrap"
import {FormattedMessage} from 'react-intl'
import messages from './messages'
import {Link} from "react-router-dom"
import Fade from "../Transitions/Fade"
import CallToAction from "../CallToAction"
import Services from "./Services"
import Slider from "./Slider"

export default class Home extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Jumbotron>
                    <Container>
                        <h1 className="display-3">Associazione Cuba conmigo</h1>
                        <p><FormattedMessage {...messages.contactMessage} /></p>
                        <p><Link className="btn btn-primary btn-lg" to="/about" role="button">Learn more &raquo;</Link>
                        </p>
                    </Container>
                </Jumbotron>
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