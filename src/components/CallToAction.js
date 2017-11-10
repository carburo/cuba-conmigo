import Section from "./Section";
import {Button} from "reactstrap";
import * as React from "react";

export default function CallToAction(props) {
    return (
        <Section dark={props.dark} title={props.title} subtitle={props.subtitle}>
            <p style={buttonGroupStyle}>
                <ActionButton outline text={props.option1} />
                <Separator/>
                <ActionButton text={props.option2}/>
            </p>
        </Section>
    );
}

function Separator() {
    return <span style={{marginRight: "4rem"}}/>
}

function ActionButton(props) {
    return (
        <Button style={buttonStyle} outline={props.outline} color="primary">
            {props.text}
        </Button>
    );
}

const buttonGroupStyle = {
    textAlign: "center",
    paddingTop: "1rem",
};

const buttonStyle = {
    minWidth: "10rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    fontSize: "1.1rem",
};