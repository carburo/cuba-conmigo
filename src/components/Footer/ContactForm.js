import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap"

export default function ContactForm() {
    return (
        <Form>
            <FormGroup>
                <Input placeholder="Nome" />
            </FormGroup>
            <FormGroup>
                <Input placeholder="Email" />
            </FormGroup>
            <FormGroup>
                <Input type="textarea" placeholder="Messagio" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
}