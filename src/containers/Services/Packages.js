import React from "react"
import imageData from "img/globo.svg"
import messages from "./messages"
import FluidImg from "components/FluidImage"
import { Text } from "components/Html/Text"
import Featurette, { FeaturetteDivider } from "components/Featurette"
import { FormattedMessage } from "react-intl"

const image = () => (
    <FluidImg src={imageData} alt={<FormattedMessage {...messages.documentsTitle} />} />
)

export default function Packages(props) {
    return (
        <div>
            <Featurette reverse={props.reverse}
                title={<FormattedMessage {...messages.packagesTitle} />}
                subtitle={<FormattedMessage {...messages.packagesSubtitle} />}
                image={image()}>
                <Text><FormattedMessage {...messages.packagesBody} /></Text>
                <Text><FormattedMessage {...messages.containersBody} /></Text>
            </Featurette>
            <FeaturetteDivider />
        </div>
    )
}