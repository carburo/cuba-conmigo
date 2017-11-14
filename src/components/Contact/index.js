import React from "react";
import { Container, Row, Col } from "reactstrap"
import { FormattedMessage } from "react-intl"
import messages from './messages';
import Email from "../Email";
import InfoCard from "../InfoCard";
import Fade from "../Transitions/Fade";
import { H1, Text } from "../Html";
import Timetable from "../Timetable";

export default class Contact extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Container>
                    <H1><FormattedMessage {...messages.contactHeader} /></H1>
                    <Text lead>
                        <FormattedMessage {...messages.contactHeaderMessage} />
                    </Text>
                </Container>

                <Container>
                    <Row>
                        <Col md={4}>
                            <InfoCard icon={<i className="icon-direction" />}
                                title={<FormattedMessage {...messages.addressTitle} />}>
                                <p><FormattedMessage {...messages.addressText} /></p>
                            </InfoCard>
                        </Col>
                        <Col md={4}>
                            <InfoCard icon={<i className="icon-envelope" />}
                                title={<FormattedMessage {...messages.emailTitle} />}>
                                <ul>
                                    <li><Email to="info@cubaconmigo.com" /></li>
                                    <li><Email to="viaggi@cubaconmigo.com" /></li>
                                </ul>
                            </InfoCard>
                        </Col>
                        <Col md={4}>
                            <InfoCard icon={<i className="icon-phone" />}
                                title={<FormattedMessage {...messages.phoneTitle} />}>
                                <ul>
                                    <li><FormattedMessage {...messages.officePhoneTitle} />: 06 64469629</li>
                                    <li><FormattedMessage {...messages.documentsPhoneTitle} />: 346 2303221</li>
                                    <li><FormattedMessage {...messages.travelPhoneTitle} />: 389 2599754</li>
                                    <li><FormattedMessage {...messages.packagesPhoneTitle} />: 333 7560422</li>
                                    <li><FormattedMessage {...messages.containersPhoneTitle} />: 347 1782872</li>
                                    <li><FormattedMessage {...messages.translationsPhoneTitle} />: 328 6248883</li>
                                </ul>
                            </InfoCard>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    {/* <h2><FormattedMessage {...messages.openingTimeTitle} /></h2> */}
                    <Timetable />
                </Container>
            </Fade>
        );
    }
}