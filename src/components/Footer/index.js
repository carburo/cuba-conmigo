import React from "react";
import {FormattedMessage} from "react-intl"
import messages from './messages';

export default function Footer(props) {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <FormattedMessage {...messages.copyrightNotice}/>
                    <a href="http://polymitasoft.com">
                        <FormattedMessage {...messages.designerLink}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}
