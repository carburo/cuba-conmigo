import React from "react";
import {Container, Jumbotron, Button, Row, Col} from "reactstrap"
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import {Link} from "react-router-dom";
import Fade from "../Transitions/Fade";
import Email from "../Email";
import InfoCard from "../InfoCard";
import Section from "../Section";

export default class Home extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Jumbotron>
                    <Container>
                        <h1 className="display-3">Associazione Cuba conmigo</h1>
                        <p><FormattedMessage {...messages.contactMessage} /></p>
                        <p><Link className="btn btn-primary btn-lg" to="/about" role="button">Learn more &raquo;</Link>
                        </p>
                    </Container>
                </Jumbotron>
                <Section>
                    <h2 style={{textAlign: "center"}}>Add something here</h2>
                    <Row>
                        <Col md={4}>
                            <InfoCard icon={<i className="icon-direction"/>}
                                      title={"Ya ves tu"}>
                                <p>Nada que hacer</p>
                            </InfoCard>
                        </Col>
                        <Col md={4}>
                            <InfoCard icon={<i className="icon-envelope"/>}
                                      title={"Viajes"}>
                                <ul>
                                    <li><Email to="info@cubaconmigo.com"/></li>
                                    <li><Email to="viaggi@cubaconmigo.com"/></li>
                                </ul>
                            </InfoCard>
                        </Col>
                        <Col md={4}>
                            <InfoCard icon={<i className="icon-phone"/>}
                                      title={"Telefonaco"}>
                                <p>Yo me presento porque eso, pero ya yo no me presento ni nada. Ya salgo en la tele. Ya
                                    soy famoso.</p>
                            </InfoCard>
                        </Col>
                    </Row>
                </Section>
                <Section dark>
                    <h2 style={{textAlign: "center"}}>This is a call to action</h2>
                    <p style={{textAlign: "center"}}>
                        <Button color="primary" outline className="mr-5">Hell yeah!</Button>
                        <Button color="primary">I'll pass</Button>
                    </p>
                </Section>
            </Fade>
        );
    }
}
