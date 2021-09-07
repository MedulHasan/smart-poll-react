/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

class PollForm extends React.Component {
    render() {
        return (
            <div>
                <Form className="mx-3">
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input placeholder="A Dummy Title" id="title" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="describtion">Describtion</Label>
                        <Input type="textarea" placeholder="Describe yor poll" id="describtion" />
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default PollForm;
