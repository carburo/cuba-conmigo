import React from "react";
import {FormattedMessage} from "react-intl"
import {Container, Row, Col, Form, FormGroup, Input, Button} from "reactstrap"
import messages from './messages'
import {SocialIcons} from "../Icons";

export default class Footer extends React.Component {

    render() {
        return (
            <footer style={footerStyle}>
                <Container>
                    <Row>
                        <Col md={4} xs={12}>
                            <h3>About us</h3>
                            <p>
                            Perché non solo è importante fare quello che si ama, ma è pure importante amare quello che si fà!
                            Questo concetto è palpabile conoscendo Maria Luisa negli uffici di Piazza Sante Bargellini N°3, puoi apprezzarne il rispetto che porta al proprio lavoro ed alle persone che interagiscono con lei.
                            Cuba Conmigo offre consulenze sempre in forma gratuita anche su situazioni di particolare complessità, suggerendo sempre soluzioni ottimali alle esigenze della propria clientela.
                            </p>
                            <SocialIcons/>
                        </Col>
                        <Col md={4} xs={12}>
                            <h3>Orari di apertura</h3>
                            <p>
                                Lun - Ven: <br />
                                10:00 - 13:00 <br />
                                14:00 - 19:00
                            </p>
                        </Col>
                        <Col md={4} xs={12}>
                            <h3>Contattaci</h3>
                            <Form>
                                <FormGroup>
                                    <Input placeholder="Nome" />
                                </FormGroup>
                                <FormGroup>
                                    <Input placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="textarea" placeholder="Messagio" />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>    
                        </Col>
                    </Row>
                </Container>
                <div id="copyright" style={copyrightStyle}>
                    <Container>
                        <FormattedMessage {...messages.copyrightNotice}/>
                        <FormattedMessage {...messages.designerLink} />
                    </Container>
                </div>
            </footer>
        );
    }
}

const footerStyle = {
    
}

const copyrightStyle = {
    paddingTop: "1.5rem",
    paddingBottom: "2rem",
}