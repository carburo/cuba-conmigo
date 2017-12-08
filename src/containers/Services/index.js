import React from "react"
import Container from "reactstrap/lib/Container"
import { FormattedMessage } from "react-intl"
import messages from './messages'
import Translations from "./Translations"
import Documents from "./Documents"
import Packages from "./Packages"
import Fade from "components/Transitions/Fade"
import { H1 } from "components/Html"

export default class Services extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Container>
                    <H1><FormattedMessage {...messages.servicesHeader} /></H1>
                    <Documents />
                    <Translations reverse />
                    <Packages />
                </Container>
            </Fade>
        );
    }
}
