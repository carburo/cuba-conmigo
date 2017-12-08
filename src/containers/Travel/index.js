import React from "react"
import Container from "reactstrap/lib/Container"
import {FormattedMessage} from "react-intl"
import messages from './messages'
import Fade from "components/Transitions/Fade"
import {H1, Text} from "components/Html"
import CubaDestination from "./CubaDestination"
import Tourism from "./Tourism"
import Services from "./Services"

export default class Travel extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Container>
                    <H1><FormattedMessage {...messages.travelHeader} /></H1>
                    <Text lead>
                        <FormattedMessage {...messages.travelInfo} />
                    </Text>
                    <CubaDestination />
                    <Services reverse />
                    <Tourism />
                </Container>
            </Fade>
        );
    }
}
