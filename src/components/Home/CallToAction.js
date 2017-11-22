import React from "react"
import DefaultCallToAction from "../CallToAction"
import {FormattedMessage} from "react-intl"
import messages from "./messages"

export default function CallToAction() {
    return (
        <DefaultCallToAction dark
            title={<FormattedMessage {...messages.callTitle} />}
            subtitle={<FormattedMessage {...messages.callSubtitle} />}
            option1={<FormattedMessage {...messages.callServicesButton} />}
            link1="/services"
            option2={<FormattedMessage {...messages.callContactButton} />}
            link2="/contact"
        />
    )
}