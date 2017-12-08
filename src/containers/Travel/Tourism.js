import React from "react"
import imageData from "img/camara.svg"
import messages from "./messages"
import FluidImg from "components/FluidImage"
import { Text } from "components/Html"
import Featurette, { FeaturetteDivider } from "components/Featurette"
import { FormattedMessage } from "react-intl"

const image = () => (
    <FluidImg src={imageData} alt={<FormattedMessage {...messages.tourismHeader} />} />
)

export default function Tourism(props) {
    return (
        <div>
            <Featurette reverse={props.reverse}
                title={<FormattedMessage {...messages.tourismHeader} />}
                image={image()}>
                <Text>
                    <FormattedMessage {...messages.tourismText} />
                </Text>
            </Featurette>
            <FeaturetteDivider />
        </div>
    )
}