import * as React from "react";
import {Col, Row} from "reactstrap";

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

function Heading(props) {
    return (
        <h2 style={{fontWeight: "300", lineHeight: "1", letterSpacing: "-.05rem"}}>{props.children}</h2>
    );
}

export function FeaturetteDivider() {
    return <hr style={{margin: "5rem 0"}}/>;
}