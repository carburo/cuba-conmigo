import styled from "styled-components"
import React from "react"

export default class Callout extends React.Component {
    render() {
        return (
            <Container>
                <h4 className="text-primary">{this.props.title}</h4>
                {this.props.children}
            </Container>
        )
    }
}

const Container = styled.div`
    padding: 1.25rem;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    border: 1px solid #eee;
    border-left-color: ${props => props.theme.primary};
    border-left-width: .25rem;
    border-radius: .25rem;
`