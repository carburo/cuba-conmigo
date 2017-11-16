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
                    <ImgContainer>
                        <Img src={trinidadImage} alt="Trinidad" />
                    </ImgContainer>
                    <ImgContainer>
                        <Img src={puenteImage} alt="Puente" />
                    </ImgContainer>
                    <ImgContainer>
                        <Img src={carroImage} alt="Almendrón" />
                    </ImgContainer>
                    <ImgContainer>
                        <Img src={playaImage} alt="Varadero" />
                    </ImgContainer>
                </Row>    
            </Section>    
        )
    }
}

const PaddedCol = styled(Col)`
    margin-bottom: 1rem;
`

const ImgContainer = (props) => <PaddedCol xs={12} md={3}>{props.children}</PaddedCol>

const Img = styled.img`
    width: 100%;
    box-shadow: 0 5px 4px -4px gray;
`