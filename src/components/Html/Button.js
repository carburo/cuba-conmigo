import styled from 'styled-components'
import { Link } from "react-router-dom"
import * as reactstrap from 'reactstrap'

function buttonClass(props) {
    const style = (props.primary) ? 'primary' : 'secondary'
    const outline = props.outline ? `btn-outline-${style}` : ''
    const color = props.primary && !outline ? 'text-white' : ''
    const uppercase = props.uppercase ? 'text-uppercase' : ''
    return [`btn btn-${style}`, outline, color, uppercase].join(" ")
}

export const Button = styled(reactstrap.Button).attrs`
    text-color: ${props => props.theme.background};
  `

export const ButtonLink = styled(Link).attrs({
    className: props => props.className + " " + buttonClass(props),
}) ``