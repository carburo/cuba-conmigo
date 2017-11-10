import {Container} from "reactstrap";
import * as React from "react";

export default function Section(props) {
    let style = styleCommon;
    if(props.dark) {
        style = {...style, ...styleDark};
    }
    return (
        <section style={style}>
            <Container>
                {props.children}
            </Container>
        </section>
    );
}

const verticalPadding = "5rem";

const styleCommon = {
    paddingTop: verticalPadding,
    paddingBottom: verticalPadding,
};

const styleDark = {
    backgroundColor: "#e9ecef",
};