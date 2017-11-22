import React from "react"
import imageData from "img/mazo.svg"
import messages from "./messages"
import FluidImg from "../FluidImage"
import { Ul, ButtonLink } from "../Html"
import { Link } from "react-router-dom"
import Featurette, { FeaturetteDivider } from "../Featurette"
import { FormattedMessage } from "react-intl"

const link = "/legal"

const image = () => (
    <Link to={link} >
        <FluidImg src={imageData} alt={<FormattedMessage {...messages.translationsTitle} />} />
    </Link>
)

export default function Documents(props) {
    return (
        <div>
            <Featurette reverse={props.reverse}
                title={<FormattedMessage {...messages.documentsTitle} />}
                subtitle={<FormattedMessage {...messages.documentsSubtitle} />}
                image={image()}>
                <Ul>
                    {messages.servicesList.map((item, index) => <li><FormattedMessage {...item} /></li>)}
                </Ul>
                <ButtonLink outline primary to={link}>
                    <FormattedMessage {...messages.showMore} />
                </ButtonLink>
            </Featurette>
            <FeaturetteDivider />
        </div>
    )
}