import Container from "reactstrap/lib/Container"
import * as React from "react"
import { H2 } from "./Html"

export default function Section(props) {
    let style = styleCommon;
    if (props.dark) {
        style = { ...style, ...styleDark };
    }
    return (
        <section style={style}>
            <Container>
                {
                    (props.title !== undefined) ?
                        <H2 style={titleStyle}>{props.title}</H2> : null
                }
                {
                    (props.subtitle !== undefined) ?
                        <h3 style={subtitleStyle}>{props.subtitle}</h3> : null
                }
                {props.children}
            </Container>
        </section>
    );
}

const styleCommon = {
    paddingTop: "4rem",
    paddingBottom: "2rem",
};

const styleDark = {
    backgroundColor: "#e9ecef",
};

const titleStyle = {
    textAlign: "center",
    paddingTop: "1rem",
    marginBottom: "1rem",
};

const subtitleStyle = {
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "1.25rem"
};