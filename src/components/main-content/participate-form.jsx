/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button, CustomInput, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';

class ParticipationForm extends React.Component {
    state = {
        name: '',
        selectedOption: '',
        errors: {},
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { errors, isValid } = this.validation();
        if (isValid) {
            this.props.getOpinion({
                pollId: this.props.poll.id,
                name: this.state.name,
                selectedOption: this.state.selectedOption,
            });
            event.target.reset();
            this.setState({
                name: '',
                selectedOption: '',
                errors: {},
            });
        } else {
            this.setState({ errors });
        }
    };

    validation = () => {
        const { name, selectedOption } = this.state;
        const errors = {};
        if (!name) {
            errors.name = 'Name is Required';
        }
        if (!selectedOption) {
            errors.selectedOption = 'Must be select One option';
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0,
        };
    };

    render() {
        const { toggleModal, deletePoll, poll } = this.props;
        // console.log('1:', typeof poll);
        return (
            <Form onSubmit={this.handleSubmit}>
                <div className="d-flex">
                    <h4>Options</h4>
                    <Button className="ms-auto" color="warning" type="button" onClick={toggleModal}>
                        Edit
                    </Button>
                    <Button
                        className="ms-2"
                        color="danger"
                        type="button"
                        onClick={() => deletePoll(poll.id)}
                    >
                        Delete
                    </Button>
                </div>
                {poll.options.map((opt) => (
                    <FormGroup className="my-2" key={opt.id}>
                        <Label className="d-flex">
                            <CustomInput
                                type="radio"
                                id={opt.id}
                                name="selectedOption"
                                value={opt.id}
                                onChange={this.handleChange}
                                invalid={this.state.errors.selectedOption ? true : false}
                            />
                            {opt.value}
                            <span
                                style={{
                                    padding: '5px 20px',
                                    background: 'green',
                                    color: 'white',
                                    borderRadius: '5px',
                                }}
                                className="ms-auto"
                            >
                                {opt.vote}
                            </span>
                            <span
                                style={{
                                    padding: '5px 20px',
                                    background: 'yellow',
                                    color: 'black',
                                    borderRadius: '5px',
                                }}
                                className="ms-2"
                            >
                                {`${
                                    poll.totalVote > 0
                                        ? ((100 * opt.vote) / poll.totalVote).toFixed(2)
                                        : 0
                                }%`}
                            </span>
                        </Label>
                    </FormGroup>
                ))}
                <FormGroup>
                    <Label>Enter Your Name</Label>
                    <Input
                        name="name"
                        placeholder="Medul Hasan"
                        value={this.state.name}
                        onChange={this.handleChange}
                        invalid={this.state.errors.name ? true : false}
                    />
                    {this.state.errors.name && (
                        <FormFeedback>{this.state.errors.name}</FormFeedback>
                    )}
                </FormGroup>
                <Button className="mt-2" type="submit">
                    Submit Your Opinion
                </Button>
            </Form>
        );
    }
}

export default ParticipationForm;
