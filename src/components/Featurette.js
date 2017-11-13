import * as React from "react";
import {Col, Row} from "reactstrap";
import styled from "styled-components";
import {gray600} from "color-variables";

export default class Featurette extends React.Component {
    render() {
        return (
            <Row>
                <Col md={7} className={(this.props.reverse) ? "" : "order-md-2"}>
                    <Heading>
                        {this.props.title}
                        &nbsp;
                        <TextMuted>{this.props.subtitle}</TextMuted>
                    </Heading>
                    <p className="lead">
                        {this.props.children}
                    </p>
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
    line-height: 1;
    letter-spacing: -.05rem;
`;

export const FeaturetteDivider = styled.hr`
    margin: 5rem 0;
`;

const TextMuted = styled.span`
    color: ${gray600};
`