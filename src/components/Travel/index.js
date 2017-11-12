import React from "react";
import {Container} from "reactstrap"
import {FormattedMessage} from "react-intl"
import messages from './messages';
import Fade from "../Transitions/Fade";
import {H1} from "../Html";
import Featurette, {FeaturetteDivider} from "../Featurette";
import legalImage from "img/legal-small.jpg";
import travelImage from "img/travel-small.jpg";
import FluidImg from "../FluidImage";

export default class Travel extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Container>
                    <H1><FormattedMessage {...messages.travelHeader} /></H1>
                    <p className="lead">
                        La nostra esperienza nel settore come agenzia turistica, ci permette di suggerire le migliore soluzioni alle richieste della nostra clientela, organizzando viaggi personalizzati a Cuba usufruendo in loco di collaborazioni di operatori referenziati ed infrastrutture specializzate nei diversi servizi.
                    </p>
                    <FeaturetteDivider/>
                    <Featurette title="Destinazione Cuba."
                                subtitle=""
                                image={<FluidImg src={legalImage} alt="Generic placeholder image" route="/consulate" />}>
                        Cuba è l'isola più insolita e affascinante del mar dei Caraibi, una destinazione autentica, accogliente, e dal ritmo irresistibile; che unisce elementi molto diversi tra loro, un capolavoro di natura incontaminata in un clima caldo quasi tutto l'anno. Tante sono le attrattive di interesse, perché Cuba non è solo mare e sole, Cuba è musica, storia, natura, arte, folklore, un popolo allegro e cordiale, che sono il risultato di un passato importante.
                    </Featurette>
                    <FeaturetteDivider/>
                    <Featurette reverse title="Il turismo individuale."
                                subtitle=""
                                image={<FluidImg src={travelImage} alt="Generic placeholder image" route="/translations" />}>
                        Un viaggio personalizzato è il modo migliore per conoscere ed apprezzare un paese ed i propri costumi. Presso i nostri uffici è presente personale specializzato nell'organizzazione del viaggio che più si addice alle tue esigenze, al fine di aiutarti a scoprire gli angoli più belli e lussureggianti della natura tropicale dell’isola, il fascino delle città coloniali, il proprio antico fascino, e non ultimo la ricchezza di spirito e l’allegria dei cubani.
                    </Featurette>
                    <FeaturetteDivider/>
                </Container>
            </Fade>
        );
    }
}
