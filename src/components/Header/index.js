import React from "react";
import {Navbar, NavbarToggler, Container} from "reactstrap"
import {NavLink, Link} from "react-router-dom"
import {FormattedMessage} from "react-intl"
import messages from './messages';
import logo from '../../img/logo.png';

export default function Header(props) {
    return (
        <header id="header-wrap">
            <section id="header">
                <Navbar light={true} expand="sm" data-spy="affix" data-offset-top="50">
                    <Container>
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="Cuba Conmigo"/>
                        </Link>
                        <NavbarToggler>
                            <span className="navbar-toggler-icon"/>
                        </NavbarToggler>
                        <div className="collapse navbar-collapse justify-content-sm-start justify-content-md-end" id="main-menu">
                            <ul className="navbar-nav">
                                <NavItem link="/home" text={messages.homeNav}/>
                                <NavItem link="/about" text={messages.aboutNav}/>
                                <NavItem link="/services" text={messages.servicesNav}/>
                                <NavItem link="/travel" text={messages.travelNav}/>
                                <NavItem link="/contact" text={messages.contactNav}/>
                            </ul>
                        </div>
                    </Container>
                </Navbar>
            </section>
        </header>
    );
}

function NavItem(props) {
    return (
        <li className="nav-item dropdown">
            <NavLink to={props.link} className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
                <FormattedMessage {...props.text} />
            </NavLink>
        </li>
    );
}
