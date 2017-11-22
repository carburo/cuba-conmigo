import React from "react"
import imageData from "img/almendron.png"
import messages from "./messages"
import FluidImg from "../FluidImage"
import { Text } from "../Html"
import Featurette, { FeaturetteDivider } from "../Featurette"
import { FormattedMessage } from "react-intl"

const image = () => (
    <FluidImg src={imageData} alt={<FormattedMessage {...messages.cubaDestinationHeader} />} />
)

export default function CubaDestination(props) {
    return (
        <div>
            <Featurette reverse={props.reverse}
                title={<FormattedMessage {...messages.cubaDestinationHeader} />}
                image={image()}>
                <Text>
                    <FormattedMessage {...messages.cubaDestinationText} />
                </Text>
            </Featurette>
            <FeaturetteDivider />
        </div>
    )
}