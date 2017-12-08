import React from "react"
import imageData from "img/almendron.svg"
import messages from "./messages"
import FluidImg from "components/FluidImage"
import { Text } from "components/Html"
import Featurette, { FeaturetteDivider } from "components/Featurette"
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