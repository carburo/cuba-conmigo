import React from "react";
import {Container} from "reactstrap"
import {FormattedMessage} from "react-intl"
import messages from './messages';
import Fade from "../../components/Transitions/Fade";

export default class Travel extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Container>
                    <h1><FormattedMessage {...messages.travelHeader} /></h1>
                </Container>
            </Fade>
        );
    }
}
