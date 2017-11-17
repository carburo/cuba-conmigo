import React from "react"
import heroImage from "img/hero.svg"
import styled from "styled-components"
import {FormattedMessage} from 'react-intl'
import messages from './messages'
import {Link} from "react-router-dom"
import {Container, Jumbotron} from "reactstrap"

export default class Hero extends React.Component {
    render() {
        return (
            <Background fluid>
                <Content>
                    <Title>Associazione Cuba conmigo</Title>
                    <Subtitle><FormattedMessage {...messages.contactMessage} /></Subtitle>
                    <p><Link className="btn btn-primary text-white text-uppercase" to="/about" role="button">Learn more</Link>
                    </p>
                </Content>
            </Background>
        )
    }
}

const Content = styled(Container)`
    text-align: center;
`

const Background = styled(Jumbotron)`
    background-image: url(${heroImage});
    background-size: cover;
`

const Title = styled.h1.attrs({
    className: "text-white text-uppercase",
})`
    font-family: 'Franklin Heavy';
    font-weight: 900;
    transform: scale(1, 1.3);
    letter-spacing: 0.04em;
`

const Subtitle = styled.p.attrs({
    className: "text-white text-uppercase",
})`
    letter-spacing: 0.04em;
    margin-bottom: 3rem;
`