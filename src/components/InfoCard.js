import React from "react";
import {TimelineLite} from "gsap";
import styled from "styled-components";

export default class InfoCard extends React.Component {

    // animate = () => {
    //     let animation = new TimelineLite();
    //     animation
    //         .to(this.box, 0.4, {y: 10})
    //         .to(this.box, 0.4, {y: 0})
    // };

    render() {
        return (
            <Card>
                <div style={iconStyle} className="text-primary mb-2 icon-wrapper"
                     ref={box => this.box = box}>
                    {this.props.icon}{" "}{this.props.title} 
                </div>
                {this.props.children}
            </Card>
        );
    }
}

const Card = styled.div`
`

const iconStyle = {
    fontSize: "2.0rem",
};
