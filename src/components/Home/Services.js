import Description from "../Description"
import legalImage from "img/mazo.svg"
import travelImage from "img/avion.svg"
import packagesImage from "img/globo.svg"
import Section from "../Section"
import messages from './messages'
import { Col, Row } from "reactstrap"
import { FormattedMessage } from "react-intl"
import { Text } from "../Html"
import React from "react"
import { SlideInForward } from "../Animations"

export default function Services(props) {
    return (
        <Section>
            <Row>
                {services.map(service => {
                    const title = <FormattedMessage {...service.title} />;
                    return (
                        <Col key={service.key} xl={4} lg={4} md={4} sm={12} xs={12}>
                            
                                <Description
                                    title={title}
                                    footer={<Text><FormattedMessage {...service.text} /></Text>}>
                                    <SlideInForward>
                                        <img width="90%" alt={title} src={service.image} />
                                    </SlideInForward>
                                </Description>
                        </Col>
                    );
                })}
            </Row>
        </Section>
    );
}

const services = [
    {
        key: "legal",
        title: messages.legalTitle,
        image: legalImage,
        text: messages.legalDescription,
    },
    {
        key: "travel",
        title: messages.travelTitle,
        image: travelImage,
        text: messages.travelDescription,
    },
    {
        key: "packages",
        title: messages.packagesTitle,
        image: packagesImage,
        text: messages.packagesDescription,
    },
];