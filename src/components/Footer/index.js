import React from "react";
import { FormattedMessage } from "react-intl"
import { Container, Row, Col } from "reactstrap"
import messages from './messages'
import { SocialIcons } from "../Icons";
import ContactForm from "./ContactForm";
import { gray500, gray800, gray900 } from "color-variables";
import styled from "styled-components";
import Timetable from "../Timetable";

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
                <FooterInfo>
                    <Row>
                        <FooterColumn>
                            <h3><FormattedMessage {...messages.aboutHeader} /></h3>
                            <p><FormattedMessage {...messages.aboutBody} /></p>
                            <SocialIcons />
                        </FooterColumn>
                        <FooterColumn>
                            <Timetable />
                        </FooterColumn>
                        <FooterColumn>
                            <h3>Contattaci</h3>
                            <ContactForm />
                        </FooterColumn>
                    </Row>
                </FooterInfo>
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

const FooterInfo = styled(Container)`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
`;