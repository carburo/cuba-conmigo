import * as React from "react"
import facebook from "img/facebook-light.svg"
import twitter from "img/twitter-light.svg"
import instagram from "img/instagram-light.svg"
import medium from "img/medium-light.svg"
import styled from "styled-components"

const circleSize = "2rem";

const Image = styled.span`
    background-color: ${props => props.theme.background};
    width: ${circleSize};
    height: ${circleSize};
    display: inline-block;
    line-height: ${circleSize};
    border-radius: 50%;
    mask: url(${props => props.icon});
`

const Circle = styled.span`
    background-color: ${props => props.theme.primary};
    width: ${circleSize};
    height: ${circleSize};
    display: inline-block;
    line-height: ${circleSize};
    border-radius: 50%;
    margin: 0.2rem;
`

const Icon = (props) => (
    <Circle>
        <Image icon={props.icon} />
    </Circle>
)

function SocialIcon(props) {
    return (
        <a href={props.url}>
            <Icon icon={props.src} />
        </a>
    );
}

export const SocialIcons = () => (
    <div>
        <SocialIcon url="https://www.facebook.com/cubaconmigo" src={facebook} />
        <SocialIcon url="https://www.twitter.com/cubaconmigo" src={twitter} />
        <SocialIcon url="https://www.instagram.com/cuba_conmigo" src={instagram} />
        <SocialIcon url="https://www.medium.com/cuba-conmigo" src={medium} />
    </div>
);