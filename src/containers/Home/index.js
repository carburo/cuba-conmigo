import React from "react";
import {Container} from "reactstrap"
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import {Link} from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <Container>
                        <h1 className="display-3">Associazione Cuba conmigo</h1>
                        <p><FormattedMessage {...messages.contactMessage} /></p>
                        <p><Link className="btn btn-primary btn-lg" to="/about" role="button">Learn more &raquo;</Link></p>
                    </Container>
                </div>
            </div>
        );
    }
}
