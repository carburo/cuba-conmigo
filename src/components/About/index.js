import React from "react";
import {Container} from "reactstrap"
import {FormattedMessage} from "react-intl"
import messages, {services} from './messages';
import Fade from "../Transitions/Fade";
import {H1} from "../Html";

export default class About extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Container>
                    <H1>
                        <FormattedMessage {...messages.aboutHeader} />
                    </H1>
                    <p style={{fontSize: "1.25rem"}}>
                        <FormattedMessage {...messages.introMessage}/>
                    </p>
                    <ul style={{fontSize: "1.25rem"}}>
                        {services.map((service, i) => <li style={{paddingBottom: "0.5rem"}} key={i}>{service}</li>)}
                    </ul>
                </Container>
            </Fade>
        );
    }
}
