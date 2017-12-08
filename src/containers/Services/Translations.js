import React from "react"
import imageData from "img/traduccion.svg"
import messages from "./messages"
import FluidImg from "components/FluidImage"
import { Link } from "react-router-dom"
import { Text, ButtonLink } from "components/Html"
import Featurette, { FeaturetteDivider } from "components/Featurette"
import { FormattedMessage } from "react-intl"

const link = "/translations"

const image = () => (
    <Link to={link} >
        <FluidImg src={imageData} alt={<FormattedMessage {...messages.documentsTitle} />} />
    </Link>
)

export default function Documents(props) {
    return (
        <div>
            <Featurette reverse={props.reverse}
                title={<FormattedMessage {...messages.translationsTitle} />}
                subtitle={<FormattedMessage {...messages.translationsSubtitle} />}
                image={image()}>
                <Text><FormattedMessage {...messages.translationsBody} /></Text>
                <Text><FormattedMessage {...messages.translationsExplanation} /></Text>
                <ButtonLink outline primary to={link}>
                    <FormattedMessage {...messages.showMore} />
                </ButtonLink>
            </Featurette>
            <FeaturetteDivider />
        </div>
    )
}