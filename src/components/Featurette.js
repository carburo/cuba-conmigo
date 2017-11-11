import * as React from "react";
import {Col, Row} from "reactstrap";
import styled from "styled-components";

export default class Featurette extends React.Component {
    render() {
        return (
            <Row>
                <Col md={7} className={(this.props.reverse) ? "" : "order-md-2"}>
                    <Heading>
                        {this.props.title + " "}
                        <span className="text-muted">{this.props.subtitle}</span>
                    </Heading>
                    <p className="lead">
                        {this.props.children}
                    </p>
                </Col>
                <Col md={5} className={(this.props.reverse) ? "" : "order-md-1"}>
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
`

export const FeaturetteDivider = styled.hr`
    margin: 5rem 0;
`