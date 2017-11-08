import React from 'react';
import { IntlProvider } from 'react-intl';

export default class LanguageProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <IntlProvider locale={this.props.locale} key={this.props.locale} messages={this.props.messages[this.props.locale]}>
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}
