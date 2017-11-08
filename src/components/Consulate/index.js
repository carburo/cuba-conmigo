import React from 'react';
import {Button, Container, Fade} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fadeIn: true};
        this.toggle = this.toggle.bind(this);
    }

    render() {
        return (
            <Container>
                <Button color="primary" onClick={this.toggle}>Toggle Fade</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    This content will fade in and out as the button is pressed
                </Fade>
            </Container>
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};