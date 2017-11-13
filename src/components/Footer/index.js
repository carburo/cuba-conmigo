import React from "react";
import { FormattedMessage } from "react-intl"
import { Container, Row, Col } from "reactstrap"
import messages from './messages'
import { SocialIcons } from "../Icons";
import ContactForm from "./ContactForm";
import { gray500, gray800, gray900 } from "color-variables";
import styled from "styled-components";

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
            <FooterDiv>
                <Container className="pt-4 pb-4">
                    <Row>
                        <FooterColumn>
                            <h3><FormattedMessage {...messages.aboutHeader} /></h3>
                            <p><FormattedMessage {...messages.aboutBody} /></p>
                            <SocialIcons />
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
                            <ContactForm />
                        </FooterColumn>
                    </Row>
                </Container>
                <CopyrightDiv>
                    <Container>
                        <FormattedMessage {...messages.copyrightNotice} />
                        <FormattedMessage {...messages.designerLink} />
                    </Container>
                </CopyrightDiv>
            </FooterDiv>
        );
    }
}

const FooterDiv = styled.footer`
    background: ${gray800};
    color: ${gray500};
`

const CopyrightDiv = styled.div`
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    background: ${gray900};
`;