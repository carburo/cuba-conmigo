import React from "react";
import {FormattedMessage} from "react-intl"
import {Container, Row, Col, Form, FormGroup, Input, Button} from "reactstrap"
import messages from './messages'
import {SocialIcons} from "../Icons";
import {gray500, gray800, gray900} from "color-variables";

function FooterColumn(props) {
    return (
      <Col md={4} xs={12}>
          {props.children}
      </Col>
    );
}

export default class Footer extends React.Component {

    render() {
        return (
            <footer style={footerStyle}>
                <Container className="pt-4 pb-4">
                    <Row>
                        <FooterColumn>
                            <h3>About us</h3>
                            <p>
                            Perché non solo è importante fare quello che si ama, ma è pure importante amare quello che si fà!
                            Questo concetto è palpabile conoscendo Maria Luisa negli uffici di Piazza Sante Bargellini N°3, puoi apprezzarne il rispetto che porta al proprio lavoro ed alle persone che interagiscono con lei.
                            Cuba Conmigo offre consulenze sempre in forma gratuita anche su situazioni di particolare complessità, suggerendo sempre soluzioni ottimali alle esigenze della propria clientela.
                            </p>
                            <SocialIcons/>
                        </FooterColumn>
                        <FooterColumn>
                            <h3>Orari di apertura</h3>
                            <p>
                                Lun - Ven: <br />
                                10:00 - 13:00 <br />
                                14:00 - 19:00
                            </p>
                        </FooterColumn>
                        <FooterColumn>
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
                        </FooterColumn>
                    </Row>
                </Container>
                <div style={copyrightStyle}>
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
    background: gray800,
    color: gray500,
};

const copyrightStyle = {
    paddingTop: "1.5rem",
    paddingBottom: "2rem",
    background: gray900,
};