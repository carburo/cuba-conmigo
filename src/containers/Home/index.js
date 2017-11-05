import React from "react";
import {Container, Jumbotron} from "reactstrap"
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import {Link} from "react-router-dom";
import Fade from "../../components/Transitions/Fade";

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
            </Fade>
        );
    }
}
