import React from "react";
import {Container} from "reactstrap"
import {FormattedMessage} from "react-intl"
import messages from './messages';
import Fade from "../Transitions/Fade";
import Featurette, {FeaturetteDivider} from "../Featurette";
import legalImage from "img/legal-small.jpg";
import travelImage from "img/travel-small.jpg";
import packagesImage from "img/packages-small.jpg";
import {H1} from "../Html";
import FluidImg from "../FluidImage";

export default class Services extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Container>
                    <H1><FormattedMessage {...messages.servicesHeader} /></H1>
                    <Featurette title="Consulato."
                                subtitle="Lorem Ipsum Dolor."
                                image={<FluidImg src={legalImage} alt="Generic placeholder image" route="/consulate"/>}>
                        Lorem Ipsum Dolor sit amet. Lorem Ipsum Dolor sit amet. Lorem Ipsum Dolor sit amet.
                        Lorem Ipsum Dolor sit amet. Lorem Ipsum Dolor sit amet. Lorem Ipsum Dolor sit amet.
                    </Featurette>
                    <FeaturetteDivider/>
                    <Featurette reverse title="Traduzione."
                                subtitle="Lorem Ipsum Dolor."
                                image={<FluidImg src={travelImage} alt="Generic placeholder image"
                                                 route="/translations"/>}>
                        Lorem Ipsum Dolor sit amet. Lorem Ipsum Dolor sit amet. Lorem Ipsum Dolor sit amet.
                        Lorem Ipsum Dolor sit amet. Lorem Ipsum Dolor sit amet. Lorem Ipsum Dolor sit amet.
                    </Featurette>
                    <FeaturetteDivider/>
                    <Featurette title="Pacchi."
                                subtitle="Lorem Ipsum Dolor."
                                image={<FluidImg src={packagesImage} alt="Generic placeholder image"
                                                 route="/packages"/>}>
                        Lorem Ipsum Dolor sit amet. Lorem Ipsum Dolor sit amet. Lorem Ipsum Dolor sit amet.
                        Lorem Ipsum Dolor sit amet. Lorem Ipsum Dolor sit amet. Lorem Ipsum Dolor sit amet.
                    </Featurette>
                    <FeaturetteDivider/>
                </Container>
            </Fade>
        );
    }
}
