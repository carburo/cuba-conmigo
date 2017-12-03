import trinidadImage from "img/trinidad.jpg"
import puenteImage from "img/puente.jpg"
import carroImage from "img/carro.jpg"
import playaImage from "img/playa.jpg"
import Section from "../Section"
import Col from "reactstrap/lib/Col"
import Row from "reactstrap/lib/Row"
import React from "react"
import styled from "styled-components"
import {FormattedMessage} from "react-intl"
import messages from "./messages"

export default class Slider extends React.Component {
    render() {
        return(
            <Section title={<FormattedMessage {...messages.sliderTitle} />}>
                <SliderContainer>
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
                </SliderContainer>    
            </Section>    
        )
    }
}

const SliderContainer = styled(Row)`
    padding-top: 2rem;
`

const PaddedCol = styled(Col)`
    margin-bottom: 1rem;
`

const ImgContainer = (props) => <PaddedCol xs={12} md={3}>{props.children}</PaddedCol>

const Img = styled.img`
    width: 100%;
    box-shadow: 0 5px 4px -4px gray;
`