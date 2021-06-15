import React, { Component, createRef } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { initiateUpdateProfile } from './actions/profile';
import { validateFields } from './utils/Common';
import { resetErrors } from './actions/errors';
import { Segment, Card, Message, Image, Header, Icon, Button, Grid, Input, Modal, Form } from 'semantic-ui-react';
import ProfileMenu from './ProfileMenu';


class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            phone: "",
            zip_code: "",
            reference: "",
            email: "",
            errorMsg: "",
            successMsg: "",
            isSubmitted: false,
            selectedFile: null,
            uploadMsgVisible: false,
            openEditProfile: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.chooseFile = this.chooseFile.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
        this.handleDismissMsg = this.handleDismissMsg.bind(this)
        this.handleEditProfile = this.handleEditProfile.bind(this)
    }

    fileInputRef = createRef()

    componentDidMount() {
        const { profile } = this.props;

        if (!_.isEmpty(profile)) {
            const { first_name, last_name, phone, zip_code, reference, email } = profile;
            this.setState({
                first_name,
                last_name,
                phone,
                zip_code,
                reference,
                email
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (!_.isEqual(prevProps.errors, this.props.errors)) {
            this.setState({
                errorMsg: this.props.errors
            });
        }
        if (!_.isEqual(prevProps.profile, this.props.profile)) {
            const { first_name, last_name, phone, zip_code, reference, email } = this.props.profile;
            this.setState({ first_name, last_name, phone, zip_code, reference, email });
        }
    }

    componentWillUnmount() {
        this.props.dispatch(resetErrors());
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { first_name, last_name, phone, zip_code } = this.state;
        const profileData = {
            first_name,
            last_name,
            phone,
            zip_code
        };

        const fieldsToValidate = [{ first_name }, { last_name }, { phone }, { zip_code }];

        const allFieldsEntered = validateFields(fieldsToValidate);
        if (!allFieldsEntered) {
            this.setState({
                errorMsg: {
                    update_error: 'Please enter all the fields.'
                }
            });
        } else {
            this.setState({ isSubmitted: true, errorMsg: '' });
            this.props.dispatch(initiateUpdateProfile(profileData));
        }
    }

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    endsWith(str, suffix) {
        return str.toString().indexOf(suffix, str.length - suffix.length) !== -1;
    }

    chooseFile = (event) => {
        if (this.endsWith(event.target.files[0], '.doc') || this.endsWith(event.target.files[0], '.pdf')) {
            this.setState({
                selectedFile: event.target.files[0]
            })
        }
        else {
            this.setState({
                errorMsg: { upload_error: "Accepts only Word documents (.doc) and PDF (.pdf)" },
                uploadMsgVisible: true
            })
        }

    }

    uploadFile = async () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        const result = await fetch("http://localhost:3000/uploadResume", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('user_token')}`
            },
            body: data
        })
        if (result.ok) {
            this.setState({
                selectedFile: null,
                uploadMsgVisible: true,
                successMsg: "Resume is uploaded"
            })

        }
        else {
            const err = await result.json()
            this.setState({
                selectedFile: null,
                uploadMsgVisible: true,
                errorMsg: err
            })
        }
    }

    handleDismissMsg = () => {
        this.setState({
            uploadMsgVisible: false
        })
    }

    handleEditProfile = () => {
        this.setState({
            openEditProfile: true
        })
    }

    closeModal = () => {
        this.setState({
            openEditProfile: false
        })
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }


    render() {
        const { first_name, last_name, phone, zip_code, email, selectedFile, successMsg, errorMsg, uploadMsgVisible, openEditProfile } = this.state
        return (
            <div>
                {
                    openEditProfile &&
                    <Modal open={openEditProfile} onClose={this.closeModal} closeIcon basic>
                        <Modal.Header>
                            Edit Profile
                        </Modal.Header>
                        <Modal.Content>
                            <Form onSubmit={this.handleSubmit} inverted >
                                <Form.Input name="first_name" label="First Name" placeholder="First Name" onChange={this.handleInputChange} input={{value:first_name}} />
                                <Form.Input name="last_name" label="Last Name" placeholder="Last Name" onChange={this.handleInputChange} input={{value:last_name}} />
                                <Form.Input name="phone" label="Mobile Phone" placeholder="Mobile Phone" onChange={this.handleInputChange} input={{value:phone}} />
                                <Form.Input name="zip_code" label="Zip Code" placeholder="Zip Code" onChange={this.handleInputChange}  input={{value:zip_code}}  />
                            </Form>
                        </Modal.Content>


                    </Modal>
                }

                <Message size='massive' style={{ backgroundImage: `url(${"/question-mark-2492009_1920.jpg"})`, margin: '0' }} >
                    <Button icon labelPosition='right' floated='right' color='olive' onClick={this.handleEditProfile}>
                        <Icon name='edit' />
                    Edit Profile
                </Button>
                    <Image circular src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' size='medium' style={{ marginBottom: '15px' }} />


                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column width={8}>
                                <Header as='h2' color='olive' size='big'>{first_name} {last_name}</Header>

                            </Grid.Column>
                            <Grid.Column textAlign='right'>
                                {
                                    successMsg && uploadMsgVisible && <Message success size='small' onDismiss={this.handleDismissMsg} >
                                        <Message.Header>
                                            {successMsg}
                                        </Message.Header>
                                    </Message>
                                }
                                {
                                    errorMsg && errorMsg.upload_error && uploadMsgVisible && <Message negative size='small' onDismiss={this.handleDismissMsg}>
                                        <Message.Header>
                                            {errorMsg.upload_error}
                                        </Message.Header>
                                    </Message>
                                }
                                <Header as='h4' color='olive' size='medium'>Upload your resume</Header>
                                {
                                    selectedFile ? (
                                        <Button icon labelPosition='right' floated='right' color='olive' onClick={this.uploadFile}>
                                            <Icon name='upload' />
                                        Upload
                                        </Button>
                                    ) :
                                        (
                                            <div>
                                                <Button icon labelPosition='right' floated='right' color='olive' onClick={() => this.fileInputRef.current.click()}>
                                                    <Icon name='file alternate' />
                                            Choose file
                                            </Button>
                                                <input type='file' size='small' ref={this.fileInputRef} onChange={this.chooseFile} style={{ display: 'none' }} />
                                            </div>

                                        )
                                }


                            </Grid.Column>

                        </Grid.Row>
                    </Grid>

                </Message>
                <ProfileMenu />
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps)(Profile)