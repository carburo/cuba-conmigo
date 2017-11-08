import React from "react";
import {FormattedMessage} from "react-intl"
import {Container} from "reactstrap"
import messages from './messages'
import {SocialIcons} from "../Icons";

export default class Footer extends React.Component {

    render() {
        return (
            <footer>
                <Container>
                    <SocialIcons/>
                </Container>
                <div className="footer">
                    <Container>
                        <FormattedMessage {...messages.copyrightNotice}/>
                        <FormattedMessage {...messages.designerLink} />
                    </Container>
                </div>
            </footer>
        );
    }
}
