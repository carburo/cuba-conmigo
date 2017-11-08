import React from "react";
import {Container} from "reactstrap"
import {FormattedMessage} from "react-intl"
import messages from './messages';
import {Link} from "react-router-dom";
import Fade from "../Transitions/Fade";

export default class Services extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Container>
                    <h1><FormattedMessage {...messages.servicesHeader} /></h1>
                    <Link to="/consulate">Consulato</Link>
                    <br/>
                    <Link to="/translations">Traduzione</Link>
                    <br/>
                    <Link to="/packages">Pacchi</Link>
                </Container>
            </Fade>
        );
    }
}
