import React from "react";
import {Container, Jumbotron, Button, Row, Col} from "reactstrap"
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import {Link} from "react-router-dom";
import Fade from "../../components/Transitions/Fade";
import Email from "../../components/Email";
import InfoCard from "../../components/InfoCard";

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
                <Container>
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
                            <p>Yo me presento porque eso, pero ya yo no me presento ni nada. Ya salgo en la tele. Ya soy famoso.</p>
                        </InfoCard>
                    </Col>
                </Row>
                </Container>
                <Jumbotron>
                    <Container>
                        <h2 style={{textAlign: "center"}}>This is a call to action</h2>
                        <p style={{textAlign: "center"}}>
                            <Button color="primary">Hell yeah!</Button>
                            <Button color="danger" style={{marginLeft: "1rem"}}>I'll pass</Button>
                        </p>    
                    </Container>    
                </Jumbotron>    
            </Fade>
        );
    }
}
