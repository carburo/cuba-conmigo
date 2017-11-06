import {defineMessages} from 'react-intl';
import * as React from "react";

export default defineMessages({
    copyrightNotice: {
        id: 'cc.components.Footer.copyright'
    },
    designerLink: {
        id: 'cc.components.Footer.designer',
        values: {
            love: <span className="text-danger">♥</span>,
            link: <a href="http://polymitasoft.com">Polymita</a>,
        },
    }
});
