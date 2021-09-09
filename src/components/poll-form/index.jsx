/* eslint-disable no-alert */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import shortid from 'shortid';
import MyForm from './pollForm';

const defaultOption = [
    { id: shortid.generate(), value: '', vote: 0 },
    { id: shortid.generate(), value: '', vote: 0 },
];

class PollForm extends React.Component {
    state = {
        title: '',
        description: '',
        options: defaultOption,
        errors: {},
    };

    componentDidMount() {
        const { poll } = this.props;
        if (poll && Object.keys(poll).length > 0) {
            this.setState({
                title: poll.title,
                description: poll.description,
                options: poll.options,
            });
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleOptionChange = (event, index) => {
        const { options } = this.state;
        options[index].value = event.target.value;
        this.setState({ options });
    };

    createOptions = () => {
        const { options } = this.state;
        if (options.length < 5) {
            options.push({
                id: shortid.generate(),
                value: '',
                vote: 0,
            });
            this.setState({ options });
        } else {
            alert('You can create max 5 options');
        }
    };

    deleteOptions = (index) => {
        const { options } = this.state;
        if (options.length > 2) {
            options.splice(index, 1);
            this.setState({ options });
        } else {
            alert('You must have two options');
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { errors, isValid } = this.validation();
        if (isValid) {
            const { title, description, options } = this.state;
            const poll = {
                title,
                description,
                options,
            };
            if (this.props.isUpdate) {
                poll.id = this.props.poll.id;
                this.props.submit(poll);
                alert('Update Successfully');
            } else {
                this.props.submit(poll);
                event.target.reset();
                this.setState({
                    title: '',
                    description: '',
                    options: defaultOption,
                    errors: {},
                });
            }
        } else {
            this.setState({ errors });
        }
    };

    validation = () => {
        const { title, description, options } = this.state;
        const errors = {};
        if (!title) {
            errors.title = 'Title is Required';
        } else if (!description) {
            errors.description = 'Description is Requires';
        }

        const optionsError = [];
        options.forEach((opt, index) => {
            if (!opt.value) {
                optionsError[index] = `${index + 1} No. option is Empty`;
            }
        });
        if (optionsError.length > 0) {
            errors.options = optionsError;
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0,
        };
    };

    render() {
        const { title, description, options, errors } = this.state;
        // console.log(options);
        return (
            <MyForm
                title={title}
                description={description}
                options={options}
                buttonValue={this.props.buttonValue || 'create Poll'}
                errors={errors}
                handleChange={this.handleChange}
                handleOptionChange={this.handleOptionChange}
                createOption={this.createOptions}
                deleteOption={this.deleteOptions}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default PollForm;
