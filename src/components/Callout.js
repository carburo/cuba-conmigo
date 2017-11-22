import styled from "styled-components"
import React from "react"

export default class Callout extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.title}</Title>
                {this.props.children}
            </Container>
        )
    }
}

const Title = styled.h4`
    color: ${props => props.theme.info};
`

const Container = styled.div`
    padding: 1.25rem;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    border: 1px solid #eee;
    border-left-color: ${props => props.theme.info};
    border-left-width: .25rem;
    border-radius: .25rem;
`