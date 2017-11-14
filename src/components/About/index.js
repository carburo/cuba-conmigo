import React from "react";
import {Container} from "reactstrap"
import {FormattedMessage} from "react-intl"
import messages, {services} from './messages';
import Fade from "../Transitions/Fade";
import {H1, Text, Ul} from "../Html";
import styled from "styled-components";

export default class About extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Container>
                    <H1>
                        <FormattedMessage {...messages.aboutHeader} />
                    </H1>
                    <Text lead>
                        <FormattedMessage {...messages.introMessage}/>
                    </Text>
                    <Ul lead>
                        {services.map((service, i) => <Li key={i}>{service}</Li>)}
                    </Ul>
                </Container>
            </Fade>
        );
    }
}

const Li = styled.li`
    padding-bottom: 0.5rem;
`;
