import React from "react";
import {Container} from "reactstrap"
import {FormattedMessage} from "react-intl"
import messages, {services} from './messages';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <h1><FormattedMessage {...messages.aboutHeader} /></h1>
                    <FormattedMessage {...messages.introMessage}/>
                    <ul>
                        {services.map((service, i) => <li key={i}>{service}</li>)}
                    </ul>
                </Container>
            </div>
        );
    }
}
