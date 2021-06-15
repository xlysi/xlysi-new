import React, { Component } from 'react';
import { Form, Message, Container, Grid, Header, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { validateFields } from './utils/Common'
import { initiateLogin } from './actions/auth';
import { connect } from 'react-redux';
import _ from 'lodash';
import { resetErrors } from './actions/errors';
import { useLocation } from 'react-router-dom'



class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            errorMsg: "",
            submittedEmail: "",
            submittedPassword: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (!_.isEqual(prevProps.errors, this.props.errors)) {
            this.setState({ errorMsg: this.props.errors });
        }
    }

    componentWillUnmount() {
        this.props.dispatch(resetErrors());
    }


    handleSubmit = (event) => {
        const { email, password } = this.state

        const fieldsToValidate = [{ email }, { password }]

        const allFieldsEntered = validateFields(fieldsToValidate);
        if (!allFieldsEntered) {
            this.setState({
                errorMsg: {
                    signin_error: 'Please enter all the fields.'
                }
            });
        } else {
            this.setState({
                errorMsg: {
                    signin_error: ''
                }
            });
            // login successful
            let location = useLocation();
            console.log(location.state.from)
            this.props.dispatch(initiateLogin(email, password, location.state.from));

        }

        this.setState({ submittedEmail: email, submittedPassword: password })
    }

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    render() {
        const { errorMsg } = this.state
        console.log(errorMsg)
        return (
            <div>
                <Message size='massive' color='black' style={{ minHeight: '700px', marginBottom: '0', marginRight: '0', backgroundImage: `url(${"/desk_laptop_working_technology.jpg"})` }}>
                    {
                        errorMsg && errorMsg.signin_error && (
                            <Message negative>
                                <Message.Header>
                                    {errorMsg.signin_error}
                                </Message.Header>
                            </Message>
                        )
                    }
                    <Container >
                        <Grid style={{ marginTop: '75px' }}>
                            <Grid.Row >
                                <Header as='h3' color="brown" style={{ fontSize: '1.25em', fontWeight: 'bold' }}>Welcome Back !</Header>

                            </Grid.Row>
                            <Grid.Row columns={2}>
                                <Grid.Column color='olive' width={6} verticalAlign='middle'>

                                    <Form onSubmit={this.handleSubmit} >
                                        <Form.Input name="email" label="Email" placeholder="Email" onChange={this.handleChange} />
                                        <Form.Input name="password" label="Password" placeholder="Password" type="password" onChange={this.handleChange} />
                                        <Form.Button style={{ marginTop: '20px' }} >Login</Form.Button>
                                        <Link to='/'>Forgot Password?</Link>
                                    </Form>
                                </Grid.Column>
                                <Grid.Column width={8} textAlign='right' style={{ marginLeft: '100px' }}>
                                    <Header as='h4' color='brown' style={{ fontSize: '2em', fontWeight: 'bold' }}>
                                        New to XLYSI ?
                                    </Header>
                                    <Button color="olive" as={Link} to="/register" size="big" style={{ marginRight: '100px', marginTop: '50px' }}>
                                        Register
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>

                        </Grid>

                    </Container>
                </Message>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
});
export default connect(mapStateToProps)(LoginPage);

