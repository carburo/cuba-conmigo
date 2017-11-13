import React from "react";
import { Container } from "reactstrap"
import { FormattedMessage } from "react-intl"
import messages from './messages';
import Fade from "../Transitions/Fade";
import Featurette, { FeaturetteDivider } from "../Featurette";
import legalImage from "img/mazo.svg";
import translationsImage from "img/avion.svg";
import packagesImage from "img/globo.svg";
import { H1 } from "../Html";
import FluidImg from "../FluidImage";

export default class Services extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Container>
                    <H1><FormattedMessage {...messages.servicesHeader} /></H1>
                    {data.map((datum, i) => {
                        const tag = datum.tag;
                        return (
                            <div key={tag}>
                                <Featurette reverse={(i % 2 !== 0)}
                                    title={<FormattedMessage {...messages[`${tag}Title`]} />}
                                    subtitle={<FormattedMessage {...messages[`${tag}Subtitle`]} />}
                                    image={<FluidImg src={datum.image} alt="Generic placeholder image" route={`/${tag}`} />}>
                                    <FormattedMessage {...messages[`${tag}Body`]} />
                                </Featurette>
                                <FeaturetteDivider />
                            </div>
                        );
                    })}
                </Container>
            </Fade>
        );
    }
}

const data = [
    { tag: "consulate", image: legalImage, },
    { tag: "translations", image: translationsImage, },
    { tag: "packages", image: packagesImage, },
]
