import React from "react";
import {Container} from "reactstrap"
import {FormattedMessage} from "react-intl"
import messages, {services} from './messages';
import Fade from "../../components/Transitions/Fade";

export default class Home extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Container>
                    <h1><FormattedMessage {...messages.aboutHeader} /></h1>
                    <FormattedMessage {...messages.introMessage}/>
                    <ul>
                        {services.map((service, i) => <li key={i}>{service}</li>)}
                    </ul>
                </Container>
            </Fade>
        );
    }
}
