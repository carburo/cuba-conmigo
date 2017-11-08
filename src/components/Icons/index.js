import * as React from "react";
import icons from "img/icons.svg";

export default function SocialIcon(props) {
    return (
        <a href={props.url}>
            <svg style={iconStyle}>
                <use xlinkHref={`${icons}#${props.icon}`} style={{fill: "#007bff"}}/>
            </svg>
        </a>
    );
}

export function Heart() {
    return (
        <svg style={textStyle}>
            <use xlinkHref={`${icons}#heart`} style={{fill: "#dc3545"}}/>
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

export const FacebookIcon = (props) => <SocialIcon icon="facebook-with-circle"
                                                   url="https://www.facebook.com/cubaconmigo"/>;
export const TwitterIcon = (props) => <SocialIcon icon="twitter-with-circle"
                                                  url="https://www.twitter.com/cubaconmigo"/>;
export const InstagramIcon = (props) => <SocialIcon icon="instagram-with-circle"
                                                    url="https://www.instagram.com/cubaconmigo"/>;
export const MediumIcon = (props) => <SocialIcon icon="medium-with-circle" url="https://www.medium.com/cubaconmigo"/>;

export const SocialIcons = () => (
    <div>
        <FacebookIcon/>
        <TwitterIcon/>
        <InstagramIcon/>
        <MediumIcon/>
    </div>
);