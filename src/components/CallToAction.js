import Section from "./Section";
import {Button, Row, Col} from "reactstrap";
import * as React from "react";

export default function CallToAction(props) {
    return (
        <Section dark={props.dark} title={props.title} subtitle={props.subtitle}>
            <Row style={buttonGroupStyle}>
                <Col md={6} sm={12} xs={12} className={"mb-2 text-xs-center text-sm-center text-md-right"}>
                    <ActionButton left outline text={props.option1}/>
                </Col>
                <Col md={6} sm={12} xs={12} className={"mb-2 text-xs-center text-sm-center text-md-left"}>
                    <ActionButton text={props.option2}/>
                </Col>
            </Row>
        </Section>
    );
}

function ActionButton(props) {
    const margin = (props.left) ? "mr-md-5 mr-sm-0" : "ml-md-5 ml-sm-0";

    return (
        <Button className={margin} style={buttonStyle} outline={props.outline} color="primary">
            {props.text}
        </Button>
    );
}

const buttonGroupStyle = {
    paddingTop: "1rem",
};

const buttonStyle = {
    minWidth: "10rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    fontSize: "1.1rem",
};