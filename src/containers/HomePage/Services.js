import Description from "components/Description"
import legalImage from "img/mazo.svg"
import travelImage from "img/avion.svg"
import packagesImage from "img/globo.svg"
import Section from "components/Section"
import messages from './messages'
import Col from "reactstrap/lib/Col"
import Row from "reactstrap/lib/Row"
import { FormattedMessage } from "react-intl"
import { Text } from "components/Html"
import React from "react"
import { SlideInForward } from "components/Animations"

export default function Services(props) {

    return (
        <Section>
            <Row>
                {services.map(service => {
                    const title = <FormattedMessage {...service.title} />;
                    return (
                        <Col key={service.key} xs={12} md={4}>
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