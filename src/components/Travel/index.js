import React from "react"
import {Container} from "reactstrap"
import {FormattedMessage} from "react-intl"
import messages from './messages'
import Fade from "../Transitions/Fade"
import {H1, Text} from "../Html"
import CubaDestination from "./CubaDestination"
import Tourism from "./Tourism"

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
                    <Tourism />
                </Container>
            </Fade>
        );
    }
}
