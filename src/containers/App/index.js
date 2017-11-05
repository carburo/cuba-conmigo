import React from "react";
import {Redirect, Route, Switch} from "react-router-dom"
import Home from "../Home/index"
import About from "../About/index"
import Services from "../Services/index"
import Travel from "../Travel/index"
import Contact from "../Contact/index"
import Consulate from "../Consulate/index"
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import Translations from "../Translations/index"
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
