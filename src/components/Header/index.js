import React from 'react';
import Collapse from 'reactstrap/lib/Collapse';
import Container from 'reactstrap/lib/Container';
import Nav from 'reactstrap/lib/Nav';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import NavItem from 'reactstrap/lib/NavItem';
import { Link, NavLink as RouteNavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import LocaleToggle from 'containers/LocaleToggle';
import logo from 'img/logo.png';
import messages from './messages';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleServices = this.toggleServices.bind(this);
    this.state = {
      isOpen: false,
      servicesIsOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleServices() {
    this.setState({
      servicesIsOpen: !this.state.servicesIsOpen,
    });
  }

  render() {
    return (
      <header id="header-wrap">
        <section id="header">
          <Navbar light expand="sm" data-spy="affix" data-offset-top="50">
            <Container>
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="Cuba Conmigo" />
              </Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItemLink link="/" text={messages.home} />
                  <NavItemLink link="/about" text={messages.about} />
                  <NavItemLink link="/services" text={messages.services} />
                  <NavItemLink link="/travel" text={messages.travel} />
                  <NavItemLink link="/contact" text={messages.contact} />
                  <LocaleToggle />
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </section>
      </header>
    );
  }
}

function NavItemLink(props) {
  return (
    <NavItem>
      <RouteNavLink
        to={props.link}
        className="nav-link"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <FormattedMessage {...props.text} />
      </RouteNavLink>
    </NavItem>
  );
}

export default Header;
