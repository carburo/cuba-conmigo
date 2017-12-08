import React from "react";
import Container from "reactstrap/lib/Container"
import { FormattedMessage } from "react-intl"
import messages from './messages'
import Fade from "components/Transitions/Fade"
import Callout from "components/Callout"
import { Text } from "components/Html";
import { TextContainer } from "components/Html/Text";

export default class Translations extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Container>
                    <h1><FormattedMessage {...messages.translationsHeader} /></h1>
                    <TextContainer lead>
                        <Text>
                            <FormattedMessage {...messages.subtitle} />
                        </Text>

                        <Text>
                            <FormattedMessage {...messages.generalInfo} />
                        </Text>

                        <Callout title={<FormattedMessage {...messages.legalTitle} />}>
                            <Text>
                                <FormattedMessage {...messages.legalText} />
                            </Text>
                        </Callout>
                    </TextContainer>
                </Container>
            </Fade>
        );
    }
}
