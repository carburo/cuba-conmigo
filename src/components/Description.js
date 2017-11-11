import * as React from "react";

export default class Description extends React.Component {

    render() {
        return (
            <div style={style}>
                <h3 style={titleStyle}>{this.props.title}</h3>
                <div style={bodyStyle}>
                    {this.props.children}
                </div>
                <div>
                    {this.props.footer}
                </div>
            </div>
        );
    }
}

const style = {
    textAlign: "center",
};

const titleStyle = {
    paddingTop: "1rem",
    marginBottom: "1rem",
    fontWeight: "600",
};

const bodyStyle = {
    marginTop: "2rem",
    marginBottom: "2rem",
};