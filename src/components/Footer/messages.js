/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';
import * as React from 'react';

export default defineMessages({
  copyrightNotice: {
    id: 'cc.Footer.copyright',
  },
  designerLink: {
    id: 'cc.Footer.designer',
    values: {
      love: <span className="text-danger">♥</span>,
      link: <a href="http://polymitasoft.com">Polymita</a>,
    },
  },
  aboutHeader: {
    id: 'cc.Footer.about.header',
  },
  aboutBody: {
    id: 'cc.Footer.about.body',
  },
});
