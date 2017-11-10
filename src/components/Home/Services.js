import Description from "../Description";
import legalImage from "img/legal-small.jpg";
import travelImage from "img/travel-small.jpg";
import packagesImage from "img/packages-small.jpg";
import Section from "../Section";
import messages from './messages';
import {Col, Row} from "reactstrap";
import {FormattedMessage} from "react-intl";
import * as React from "react";

export default function Services(props) {
    return(
        <Section>
            <Row>
                {services.map(service => {
                    const title = <FormattedMessage {...service.title} />;
                    return(
                        <Col md={4} xs={12}>
                            <Description
                                title={title}
                                footer={<p>{service.text}</p>}>
                                <img alt={title} src={service.image}/>
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
        title: messages.legalTitle,
        image: legalImage,
        text: "",
    },
    {
        title: messages.travelTitle,
        image: travelImage,
        text: "La nostra esperienza nel settore come agenzia turistica, ci permette di suggerire le migliore soluzioni alle richieste della nostra clientela, organizzando viaggi personalizzati a Cuba.",
    },
    {
        title: messages.packagesTitle,
        image: packagesImage,
        text: "Cuba Conmigo offre ai propri clienti le migliori tariffe per gli invii a Cuba. Grazie a tutti i servizi offerti da Cuba Conmigo si possono effettuare le spedizioni con facilità e sicurezza.",
    },
];