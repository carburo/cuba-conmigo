import * as React from "react";
import icons from "img/icons.svg";
import {colorPrimary, white} from "color-variables";
import styled from "styled-components";

export default function SocialIcon(props) {
    return (
        <a href={props.url}>
            <Icon>
                <use xlinkHref={`${icons}#social-circle`} style={svgBackground} />
                <use xlinkHref={`${icons}#${props.icon}`} style={svgForeground} />
            </Icon>
        </a>
    );
}

const iconSize = "2.5rem";

const Icon = styled.svg`
    width: ${iconSize};
    height: ${iconSize};
    padding: 0.2rem;
`;

const svgBackground = {
    fill: colorPrimary,
};

const svgForeground = {
    fill: white,
};

export const FacebookIcon = (props) => <SocialIcon icon="facebook-variant"
                                                   url="https://www.facebook.com/cubaconmigo"/>;
export const TwitterIcon = (props) => <SocialIcon icon="twitter-variant"
                                                  url="https://www.twitter.com/cubaconmigo"/>;
export const InstagramIcon = (props) => <SocialIcon icon="instagram-variant"
                                                    url="https://www.instagram.com/cubaconmigo"/>;
export const MediumIcon = (props) => <SocialIcon icon="medium-variant" url="https://www.medium.com/cuba-conmigo"/>;

export const SocialIcons = () => (
    <div>
        <FacebookIcon/>
        <TwitterIcon/>
        <InstagramIcon/>
        <MediumIcon/>
    </div>
);