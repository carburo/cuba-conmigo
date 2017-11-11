import React from "react";
import {TimelineLite} from "gsap";
import styled from "styled-components";

export default class InfoCard extends React.Component {

    animate = () => {
        let animation = new TimelineLite();
        animation
            .to(this.box, 0.4, {y: 10})
            .to(this.box, 0.4, {y: 0})
    };

    render() {
        return (
            <Card>
                <div style={iconStyle} className="text-primary mb-2 icon-wrapper"
                     ref={box => this.box = box} onMouseEnter={this.animate}>
                    {this.props.icon}
                </div>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </Card>
        );
    }
}

const Card = styled.div`
    text-align: center;
`

const iconStyle = {
    fontSize: "2.5rem",
};
