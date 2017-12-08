import trinidadImage from "img/trinidad.jpg"
import puenteImage from "img/puente.jpg"
import carroImage from "img/carro.jpg"
import playaImage from "img/playa.jpg"
import trinidadImageSmall from "img/trinidad-small.jpg"
import puenteImageSmall from "img/puente-small.jpg"
import carroImageSmall from "img/carro-small.jpg"
import playaImageSmall from "img/playa-small.jpg"
import Section from "components/Section"
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
                        <ResponsiveImage small={trinidadImageSmall} large={trinidadImage} alt="Trinidad" />
                    </ImgContainer>
                    <ImgContainer>
                        <ResponsiveImage small={puenteImageSmall} large={puenteImage} alt="Puente" />
                    </ImgContainer>
                    <ImgContainer>
                        <ResponsiveImage small={carroImageSmall} large={carroImage} alt="Almendrón" />
                    </ImgContainer>
                    <ImgContainer>
                        <ResponsiveImage large={playaImage} small={playaImageSmall} alt="Varadero" />
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

const ResponsiveImage = (props) => <Img src={props.small}
        srcSet={`${props.large} 500w, ${props.small} 255w`}
        sizes="(min-width: 768px) 25.0vw, 100vw"
        alt={props.alt}
    />