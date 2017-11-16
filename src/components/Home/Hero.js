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
                    <h1 className="display-3">Associazione Cuba conmigo</h1>
                    <p><FormattedMessage {...messages.contactMessage} /></p>
                    <p><Link className="btn btn-primary btn-lg" to="/about" role="button">Learn more</Link>
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