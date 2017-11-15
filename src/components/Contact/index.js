import React from "react"
import { Container, Row, Col } from "reactstrap"
import { FormattedMessage } from "react-intl"
import messages from './messages'
import Email from "../Email"
import InfoCard from "../InfoCard"
import Fade from "../Transitions/Fade"
import { H1, Text, Ul } from "../Html"
import styled from "styled-components"

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
                        <Col xs={12} md={6}>
                            {/* <InfoCard icon={<i className="icon-direction" />}
                                title={<FormattedMessage {...messages.addressTitle} />}>
                                <Text lead><FormattedMessage {...messages.addressText} /></Text>
                            </InfoCard> */}
                            <InfoCard icon={<i className="icon-envelope" />}
                                title={<FormattedMessage {...messages.emailTitle} />}>
                                <Ul lead>
                                    <li className="text-left"><Email to="info@cubaconmigo.com" /></li>
                                    <li><Email to="viaggi@cubaconmigo.com" /></li>
                                </Ul>
                            </InfoCard>
                            <InfoCard icon={<i className="icon-phone" />}
                                title={<FormattedMessage {...messages.phoneTitle} />}>
                                <Ul lead>
                                    <li><FormattedMessage {...messages.officePhoneTitle} />: 06 64469629</li>
                                    <li><FormattedMessage {...messages.documentsPhoneTitle} />: 346 2303221</li>
                                    <li><FormattedMessage {...messages.travelPhoneTitle} />: 389 2599754</li>
                                    <li><FormattedMessage {...messages.packagesPhoneTitle} />: 333 7560422</li>
                                    <li><FormattedMessage {...messages.containersPhoneTitle} />: 347 1782872</li>
                                    <li><FormattedMessage {...messages.translationsPhoneTitle} />: 328 6248883</li>
                                </Ul>
                            </InfoCard>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <MapRouter>
                                <MapCanvas class="gmap_canvas">
                                    <iframe title="map" width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Cuba conmigo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                    </iframe>embed map <a href="http://www.embedgooglemap.net">embedgooglemap.net</a>
                                </MapCanvas>
                            </MapRouter>
                        </Col>
                    </Row>
                </Container>
            </Fade>
        );
    }
}

const MapRouter = styled.div`
    overflow:hidden;
    height:400px;
    width:100%;
`

const MapCanvas = styled.div`
    background:none!important;
    height:400px;
    width:100%;
`