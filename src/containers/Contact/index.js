import React from "react"
import Container from "reactstrap/lib/Container"
import Row from "reactstrap/lib/Row"
import Col from "reactstrap/lib/Col"
import { FormattedMessage } from "react-intl"
import messages from './messages'
import Email from "components/Email"
import InfoCard from "components/InfoCard"
import Fade from "components/Transitions/Fade"
import { H1, Text, Ul } from "components/Html"
import Map from "components/Map"
import ErrorBoundary from "components/ErrorBoundary"

export default class Contact extends React.Component {

    render() {
        return (
            <Fade in={true} timeout={0}>
                <Container>
                    <H1><FormattedMessage {...messages.contactHeader} /></H1>
                    <Col xs={12} md={8}>
                        <Text lead>
                            <FormattedMessage {...messages.contactHeaderMessage} />
                        </Text>
                    </Col>
                </Container>

                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <InfoCard
                                title={<FormattedMessage {...messages.addressTitle} />}>
                                <Text lead><FormattedMessage {...messages.addressText} /></Text>
                            </InfoCard>
                            <InfoCard
                                title={<FormattedMessage {...messages.emailTitle} />}>
                                <Ul lead>
                                    <li><Email to="info@cubaconmigo.com" /></li>
                                    <li><Email to="viaggi@cubaconmigo.com" /></li>
                                </Ul>
                            </InfoCard>
                            <InfoCard 
                                title={<FormattedMessage {...messages.phoneTitle} />}>
                                <Ul lead>
                                    <li><FormattedMessage {...messages.officePhoneTitle} /></li>
                                    <li><FormattedMessage {...messages.documentsPhoneTitle} /></li>
                                    <li><FormattedMessage {...messages.travelPhoneTitle} /></li>
                                    <li><FormattedMessage {...messages.packagesPhoneTitle} /></li>
                                    <li><FormattedMessage {...messages.containersPhoneTitle} /></li>
                                    <li><FormattedMessage {...messages.translationsPhoneTitle} /></li>
                                </Ul>
                            </InfoCard>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <ErrorBoundary>
                                <Map />
                            </ErrorBoundary>
                        </Col>
                    </Row>
                </Container>
            </Fade>
        );
    }
}