import * as React from "react"
import Row from "reactstrap/lib/Row"
import Col from "reactstrap/lib/Col"
import styled from "styled-components"
import { Span, TextContainer } from "./Html"

export default class Featurette extends React.Component {
    render() {
        return (
            <Row>
                <Col md={7} className={(this.props.reverse) ? "" : "order-md-2"}>
                    <Heading>
                        {this.props.title}
                        &nbsp;
                        <Span muted>{this.props.subtitle}</Span>
                    </Heading>
                    <TextContainer lead>
                        {this.props.children}
                    </TextContainer>
                </Col>
                <Col md={5} className={(this.props.reverse) ? "text-right" : "order-md-1"}>
                    {this.props.image}
                </Col>
            </Row>
        );
    }
}

const Heading = styled.h2`
    font-weigth: 300;
    line-height: 1.2;
    letter-spacing: -.05rem;
    margin-bottom: 1.5rem;
`;

export const FeaturetteDivider = styled.hr`
    margin: 5rem 0;
`;