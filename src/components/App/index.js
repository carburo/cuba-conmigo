import React from "react";
import {Redirect, Route, Switch} from "react-router-dom"
import Home from "../Home"
import About from "../About"
import Services from "../Services"
import Travel from "../Travel"
import Contact from "../Contact"
import Consulate from "../Consulate"
import Header from "../Header"
import Footer from "../Footer"
import Translations from "../Translations"
import {Container} from "reactstrap"

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <main role="main">
                    <Switch>
                        <Redirect exact from="/" to="/home"/>
                        <Route path="/home" component={Home}/>
                    </Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/translations" component={Translations}/>
                    <Route path="/packages" render={() => <Container><h1>Pacchi</h1></Container>}/>
                    <Route path="/consulate" component={Consulate}/>
                    <Route path="/travel" component={Travel}/>
                    <Route path="/contact" component={Contact}/>
                </main>
                <Footer/>
            </div>
        );
    }
}
