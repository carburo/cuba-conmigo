import React from "react"
import Container from "reactstrap/lib/Container"
import Row from "reactstrap/lib/Row"
import Col from "reactstrap/lib/Col"
import { FormattedMessage } from "react-intl"
import messages from './messages'
import Email from "../Email"
import InfoCard from "../InfoCard"
import Fade from "../Transitions/Fade"
import { H1, Text, Ul } from "../Html"
import Map from "../Map"
import ErrorBoundary from "../ErrorBoundary"

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
                            <InfoCard icon={<i className="icon-direction" />}
                                title={<FormattedMessage {...messages.addressTitle} />}>
                                <Text lead><FormattedMessage {...messages.addressText} /></Text>
                            </InfoCard>
                            <InfoCard icon={<i className="icon-envelope" />}
                                title={<FormattedMessage {...messages.emailTitle} />}>
                                <Ul lead>
                                    <li><Email to="info@cubaconmigo.com" /></li>
                                    <li><Email to="viaggi@cubaconmigo.com" /></li>
                                </Ul>
                            </InfoCard>
                            <InfoCard icon={<i className="icon-phone" />}
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