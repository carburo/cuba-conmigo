import * as React from "react";
import icons from "img/icons.svg";
import {colorPrimary, white} from "../../colors"

export default function SocialIcon(props) {
    return (
        <a href={props.url}>
            <svg style={iconStyle}>
                <use xlinkHref={`${icons}#social-circle`} style={svgBackground} />
                <use xlinkHref={`${icons}#${props.icon}`} style={svgForeground} />
            </svg>
        </a>
    );
}

export function Heart() {
    return (
        <svg style={textStyle}>
            <use xlinkHref={`${icons}#heart`} style={{fill: "#007bff"}}/>
        </svg>
    );
}

const iconStyle = {
    width: "2.5rem",
    height: "2.5rem",
    padding: "0.2rem",
};

const textStyle = {
    width: "1rem",
    height: "1rem",
    padding: "0.05em",
};

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