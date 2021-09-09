/* eslint-disable arrow-body-style */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';

class MyForm extends React.Component {
    render() {
        const {
            title,
            description,
            options,
            errors,
            buttonValue,
            handleChange,
            handleOptionChange,
            createOption,
            deleteOption,
            handleSubmit,
        } = this.props;
        return (
            <Form className="mx-3" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                        name="title"
                        placeholder="A Dummy Title"
                        id="title"
                        value={title}
                        onChange={handleChange}
                        invalid={errors.title ? true : false}
                    />
                    {errors.title && <FormFeedback>{errors.title}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        type="textarea"
                        name="description"
                        placeholder="Describe your poll"
                        id="description"
                        value={description}
                        onChange={handleChange}
                        invalid={errors.description ? true : false}
                    />
                    {errors.description && <FormFeedback>{errors.description}</FormFeedback>}
                </FormGroup>
                <FormGroup className="mt-3">
                    <Label>
                        Enter Options
                        <Button onClick={createOption} color="success" className="btn-sm ms-3">
                            Add Option
                        </Button>
                    </Label>
                    {options.map((option, index) => (
                        <div key={option.id} className="d-flex mt-3">
                            <Input
                                type="text"
                                value={option.value}
                                onChange={(e) => handleOptionChange(e, index)}
                                invalid={errors.options && errors.options[index] ? true : false}
                            />
                            <Button
                                color="danger"
                                className="btn-sm ms-2"
                                disabled={options.length <= 2}
                                onClick={() => deleteOption(index)}
                            >
                                Delete
                            </Button>
                        </div>
                    ))}
                </FormGroup>
                <Button className="mt-3" color="primary" type="submit">
                    {buttonValue}
                </Button>
            </Form>
        );
    }
}

export default MyForm;
