import * as React from "react";

export default function Email(props) {
    return <a href={`mailto:${props.to}`}>{props.to}</a>;
}