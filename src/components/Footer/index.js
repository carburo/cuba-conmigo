import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import styled from 'styled-components';
import messages from './messages';
import { SocialIcons } from '../Icons';
import ContactForm from './ContactForm';
import { gray500, gray800, gray900 } from '../Theme';
import Timetable from '../Timetable';
import { H3 } from '../Html';

function Footer() {
  return (
    <FooterDiv>
      <FooterInfo>
        <Row>
          <FooterColumn>
            <H3><FormattedMessage {...messages.aboutHeader} /></H3>
            <p><FormattedMessage {...messages.aboutBody} /></p>
            <SocialIcons />
          </FooterColumn>
          <FooterColumn>
            <Timetable />
          </FooterColumn>
          <FooterColumn>
            <H3>Contattaci</H3>
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

function FooterColumn(props) {
  return (
    <Col md={4} xs={12}>
      {props.children}
    </Col>
  );
}

const FooterDiv = styled.footer`
    background: ${gray800};
    color: ${gray500};
`;

const CopyrightDiv = styled.div`
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    background: ${gray900};
`;

const FooterInfo = styled(Container) `
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
`;

export default Footer;
