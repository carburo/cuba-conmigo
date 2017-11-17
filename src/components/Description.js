import React from "react"
import { Center, H3 } from "./Html"
import styled from "styled-components"

export default class Description extends React.Component {

    render() {
        return (
            <Center>
                <H3>{this.props.title}</H3>
                <Body>
                    {this.props.children}
                </Body>
                <div>
                    {this.props.footer}
                </div>
            </Center>
        )
    }
}

const Body = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
`