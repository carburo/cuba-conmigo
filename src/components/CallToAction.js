import Section from "./Section";
import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";

export default function CallToAction(props) {
    return (
        <Section dark={props.dark} title={props.title} subtitle={props.subtitle}>
            <ButtonGroup>
                <Col md={6} xs={12} className={buttonClass("right")}>
                    <ActionButton left outline text={props.option1} to={props.link1}/>
                </Col>
                <Col md={6} xs={12} className={buttonClass("left")}>
                    <ActionButton text={props.option2} to={props.link2}/>
                </Col>
            </ButtonGroup>
        </Section>
    );
}

const buttonClass = (orientation) => `mb-2 text-center text-sm-center text-md-${orientation}`;

function ActionButton(props) {
    const margin = (props.left) ? "mr-md-5 mr-sm-0" : "ml-md-5 ml-sm-0";
    const btn = 'btn' + (props.outline ? '-outline' : '');
    return (
        <ButtonLink to={props.to} className={`btn ${btn}-primary ${margin}`}>
            {props.text}
        </ButtonLink>
    );
}

const ButtonGroup = styled(Row)`
    padding-top: 1rem;
`

const ButtonLink = styled(Link)`
    min-width: 10rem;
    padding-left: 2rem;
    padding-right: 3rem;
    font-size: 1.1rem;
`