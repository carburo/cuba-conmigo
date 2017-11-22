import React from 'react'
import {Container, Fade} from 'reactstrap'
import { H1 } from '../Html'
import { FormattedMessage } from 'react-intl'
import messages from "./messages"

export default class Legal extends React.Component {
    render() {
        return (
            <Container>
                <Fade in={true} timeout={0}>
                    <H1><FormattedMessage {...messages.title}/></H1>
                </Fade>
            </Container>
        );
    }
};