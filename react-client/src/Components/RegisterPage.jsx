import React, { Component } from 'react';
import { Form, Message, Grid } from 'semantic-ui-react';
import { validateFields } from './utils/Common'
import { registerNewUser } from './actions/auth';
import { connect } from 'react-redux';
import _ from 'lodash';
import { resetErrors } from './actions/errors';





class RegisterPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            zipCode: "",
            reference: "",
            email: "",
            password: "",
            cpassword: "",
            errorMsg: "",
            successMsg: "",
            isSubmitted: false
        }

        this.registerUser = this.registerUser.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (!_.isEqual(prevProps.errors, this.props.errors)) {
            this.setState({ errorMsg: this.props.errors });
        }
    }

    componentWillUnmount() {
        this.props.dispatch(resetErrors());
    }

    registerUser = (event) => {
        event.preventDefault()

        const { firstName, lastName, phone, zipCode, reference, email, password, cpassword } = this.state
        const fieldsToValidate = [
            { firstName }, { lastName }, { phone }, { zipCode }, { reference }, { email }, { password }, { cpassword }
        ]

        const allFieldsEntered = validateFields(fieldsToValidate);
        if (!allFieldsEntered) {
            this.setState({
                errorMsg: {
                    signup_error: 'Please enter all the fields.'
                }
            });
        } else {
            if (password !== cpassword) {
                this.setState({
                    errorMsg: {
                        signup_error: 'Passwords do not match'
                    }
                });
            } else {
                this.setState({ isSubmitted: true });
                this.props.dispatch(registerNewUser({
                    firstName, lastName, phone, zipCode, reference, email, password, cpassword
                })).then(response => {
                    if (response.success) {
                        this.setState({
                            successMsg: 'User registered successfully.',
                            errorMsg: ''
                        });
                    }
                })
            }
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const { isSubmitted, successMsg, errorMsg } = this.state
        console.log(errorMsg)

        return (
            <div>
                <Message color='black' inverted size='massive' style={{ minHeight: '500px' }}>
                    {
                        errorMsg && errorMsg.signup_error ? (
                            <Message negative>
                                <Message.Header>
                                    {errorMsg.signup_error}
                                </Message.Header>
                            </Message>
                        ) : (isSubmitted && (
                            <Message success>
                                <Message.Header>
                                    {successMsg}
                                </Message.Header>
                            </Message>
                        ))
                    }
                    <Form onSubmit={this.registerUser}>
                        <Grid style={{ marginTop: '100px' }}>
                            <Grid.Row>
                                <Grid.Column width={7} color='olive' style={{ marginLeft: '20px' }}>
                                    <Form.Input name="firstName" label="First Name" placeholder="First Name" onChange={this.handleInputChange} />
                                    <Form.Input name="lastName" label="Last Name" placeholder="Last Name" onChange={this.handleInputChange} />
                                    <Form.Input name="phone" label="Mobile Phone" placeholder="Mobile Phone" onChange={this.handleInputChange} />
                                    <Form.Input name="zipCode" label="Zip Code" placeholder="Zip Code" onChange={this.handleInputChange} />
                                </Grid.Column>
                                <Grid.Column width={7} style={{ marginLeft: '150px' }} color='olive'>
                                    <Form.Input name="reference" label="How did you hear about us ?" placeholder="Ex : From a friend" onChange={this.handleInputChange} />
                                    <Form.Input name="email" label="Email" placeholder="Email" onChange={this.handleInputChange} />
                                    <Form.Input name="password" label="Password" placeholder="Password" type="password" onChange={this.handleInputChange} />
                                    <Form.Input name="cpassword" label="Confirm Password" placeholder="Confirm Password" type="password" onChange={this.handleInputChange} />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row textAlign='center' style={{ marginTop: '50px' }}>
                                <Form.Button size='big' style={{ marginLeft: '625px' }} >Register</Form.Button>
                            </Grid.Row>

                        </Grid>


                    </Form>
                </Message>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
});

export default connect(mapStateToProps)(RegisterPage)