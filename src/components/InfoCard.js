import React from "react";
import styled from "styled-components";

export default class InfoCard extends React.Component {

    render() {
        return (
            <Card>
                <Title>
                    {this.props.icon}{" "}{this.props.title} 
                </Title>
                {this.props.children}
            </Card>
        );
    }
}


const Title = styled.div.attrs({
    className: "text-primary mb-2 icon-wrapper",
})`
    font-size: 2rem;
`

const Card = styled.div``
