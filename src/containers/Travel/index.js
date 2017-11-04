import React from "react";
import {Container} from "reactstrap"
import { FormattedMessage } from "react-intl"
import messages from './messages';

export default class Home extends React.Component {
    render() {
      return (
        <div>
          <Container>
            <h1><FormattedMessage {...messages.travelHeader} /></h1>
          </Container>
        </div>
      );
    }
}
