import * as React from "react";

const h1Props = {
  marginBottom: "2rem",
};

export function H1(props) {
    return <h1 style={h1Props}>{props.children}</h1>
}