import React from "react"
import heroImage from "img/hero.svg"
import styled from "styled-components"
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import { Container, Jumbotron } from "reactstrap"
import { white } from "../Theme"
import { ButtonLink } from "../Html"

export default class Hero extends React.Component {
    render() {
        return (
            <Background fluid>
                <Content>
                    <Title>Associazione Cuba conmigo</Title>
                    <Subtitle><FormattedMessage {...messages.contactMessage} /></Subtitle>
                    <div>
                        <ButtonLink primary uppercase to="/about">Learn more</ButtonLink>
                    </div>
                </Content>
            </Background>
        )
    }
}

const Content = styled(Container) `
    text-align: center;
`

const Background = styled(Jumbotron) `
    background-image: url(${heroImage});
    background-size: cover;
`

const Title = styled.h1`
    font-family: 'Franklin Heavy';
    font-weight: 900;
    transform: scale(1, 1.3);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${white}
`

const Subtitle = styled.p.attrs({
    className: "text-white text-uppercase",
}) `
    letter-spacing: 0.04em;
    margin-bottom: 3rem;
`