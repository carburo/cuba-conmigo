import trinidadImage from "img/trinidad.jpg"
import puenteImage from "img/puente.jpg"
import carroImage from "img/carro.jpg"
import playaImage from "img/playa.jpg"
import Section from "../Section"
import { Col, Row } from "reactstrap"
import React from "react"
import styled from "styled-components"

export default class Slider extends React.Component {
    render() {
        return(
            <Section title="Come to visit us">
                <Row style={{paddingTop: "2rem"}}>
                    <Col xs={12} md={3}>
                        <Img src={trinidadImage} alt="Trinidad" />
                    </Col>
                    <Col xs={12} md={3}>
                        <Img src={puenteImage} alt="Trinidad" />
                    </Col>
                    <Col xs={12} md={3}>
                        <Img src={carroImage} alt="Trinidad" />
                    </Col>
                    <Col xs={12} md={3}>
                        <Img src={playaImage} alt="Trinidad" />
                    </Col>
                </Row>    
            </Section>    
        )
    }
}

const Img = styled.img`
    width: 100%;
    box-shadow: 0 5px 4px -4px gray;
`