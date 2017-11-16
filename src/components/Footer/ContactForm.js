import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap"

export default function ContactForm() {
    return (
        <Form method="post">
            <input type="hidden" name="form-name" value="contact" />
            <FormGroup>
                <Input name="name" type="text" placeholder="Nome" />
            </FormGroup>
            <FormGroup>
                <Input name="email" type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
                <Input name="message" type="textarea" placeholder="Messagio" />
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
    );
}