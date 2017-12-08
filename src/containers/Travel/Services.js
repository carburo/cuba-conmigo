import React from "react"
import imageData from "img/avion.svg"
import messages from "./messages"
import FluidImg from "components/FluidImage"
import { Ul } from "components/Html"
import Featurette, { FeaturetteDivider } from "components/Featurette"
import { FormattedMessage } from "react-intl"

const image = () => (
    <FluidImg src={imageData} alt={<FormattedMessage {...messages.servicesHeader} />} />
)

export default function Services(props) {
    return (
        <div>
            <Featurette reverse={props.reverse}
                title={<FormattedMessage {...messages.servicesHeader} />}
                image={image()}>
                <Ul>
                    {messages.servicesList.map((item, index) => <li><FormattedMessage {...item} /></li>)}
                </Ul>
            </Featurette>
            <FeaturetteDivider />
        </div>
    )
}