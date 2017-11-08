import React from "react";
import {Navbar, NavbarToggler, Container, NavItem, Collapse, Nav} from "reactstrap"
import {NavLink, Link} from "react-router-dom"
import {FormattedMessage} from "react-intl"
import messages from './messages';
import logo from 'img/logo.png';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <header id="header-wrap">
                <section id="header">
                    <Navbar light={true} expand="sm" data-spy="affix" data-offset-top="50">
                        <Container>
                            <Link className="navbar-brand" to="/">
                                <img src={logo} alt="Cuba Conmigo"/>
                            </Link>
                            <NavbarToggler onClick={this.toggle} />
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="ml-auto" navbar>
                                        <NavItemLink link="/home" text={messages.homeNav}/>
                                        <NavItemLink link="/about" text={messages.aboutNav}/>
                                        <NavItemLink link="/services" text={messages.servicesNav}/>
                                        <NavItemLink link="/travel" text={messages.travelNav}/>
                                        <NavItemLink link="/contact" text={messages.contactNav}/>
                                    </Nav>
                                </Collapse>
                        </Container>
                    </Navbar>
                </section>
            </header>
        );
    }
}

class NavItemLink extends React.Component {
    render() {
        return (
            <NavItem>
                <NavLink to={this.props.link} className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
                    <FormattedMessage {...this.props.text} />
                </NavLink>
            </NavItem>
        );
    }
}