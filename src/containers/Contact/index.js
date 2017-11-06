import React from "react";
import {Container, Row} from "reactstrap"
import {FormattedMessage} from "react-intl"
import messages from './messages';
import Email from "../../components/Email";
import InfoCard from "../../components/InfoCard";
import Fade from "../../components/Transitions/Fade";

export default class Contact extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Container>
                    <h1><FormattedMessage {...messages.contactHeader} /></h1>
                    <p>
                        <FormattedMessage {...messages.contactHeaderMessage} />
                    </p>
                </Container>

                <Container>
                    <Row>
                        <div className="col-md-4">
                            <InfoCard icon={<i className="icon-direction"/>}
                                      title={<FormattedMessage {...messages.addressTitle}/>}>
                                <p><FormattedMessage {...messages.addressText} /></p>
                            </InfoCard>
                        </div>
                        <div className="col-md-4">
                            <InfoCard icon={<i className="icon-envelope"/>}
                                      title={<FormattedMessage {...messages.emailTitle}/>}>
                                <ul>
                                    <li><Email to="info@cubaconmigo.com"/></li>
                                    <li><Email to="viaggi@cubaconmigo.com"/></li>
                                </ul>
                            </InfoCard>
                        </div>
                        <div className="col-md-4">
                            <InfoCard icon={<i className="icon-phone"/>}
                                      title={<FormattedMessage {...messages.phoneTitle}/>}>
                                <ul>
                                    <li><FormattedMessage {...messages.officePhoneTitle}/>: 06 64469629</li>
                                    <li><FormattedMessage {...messages.documentsPhoneTitle}/>: 346 2303221</li>
                                    <li><FormattedMessage {...messages.travelPhoneTitle}/>: 389 2599754</li>
                                    <li><FormattedMessage {...messages.packagesPhoneTitle}/>: 333 7560422</li>
                                    <li><FormattedMessage {...messages.containersPhoneTitle}/>: 347 1782872</li>
                                    <li><FormattedMessage {...messages.translationsPhoneTitle}/>: 328 6248883</li>
                                </ul>
                            </InfoCard>
                        </div>
                    </Row>
                </Container>

                <Container>
                    <h2><FormattedMessage {...messages.openingTimeTitle}/></h2>
                    <h2>
                        <i className="rounded-circle icon-social-facebook"/>
                    </h2>
                    <p>
                        Lun - Ven: 10:00 - 13:00, 14:00 - 19:00
                    </p>
                </Container>
            </Fade>
        );
    }
}
