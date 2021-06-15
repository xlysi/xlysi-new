import React, { Component, createRef } from 'react';
import { Icon, Button, Modal, Dropdown, Message } from 'semantic-ui-react';
import {chooseFile} from '../utils/ResumeUtils'


class JobApplication extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeJob: {},
            saved: false,
            errorMsg: "",
            applyPrompt: false,
            selectedFile: null,
            selectMsgVisible: false,
            resumes: [],
            resumeFiles: [],
            submitPrompt: false,
            submitted: false,
            successMsg: "",
            resumeId: 0

        }

        this.closeSubmitModal = this.closeSubmitModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.handleApply = this.handleApply.bind(this)
        this.handleDismissMsg = this.handleDismissMsg.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    fileInputRef = createRef()

    componentWillReceiveProps(nextProps) {
        this.setState({ activeJob: nextProps.activeJob, applyPrompt: nextProps.applyPrompt }, () => {
            this.getResumes().then(
                result => this.setState({ resumes: result[0], resumeFiles: result[1] })
            )
        })
    }




    handleApply = async () => {
        const { activeJob, selectedFile } = this.state
        const data = new FormData()
        data.append('file', selectedFile)
        data.append('job', activeJob['id'])
        if (localStorage.getItem('user_token')) {
            const result = await fetch("http://localhost:3000/apply", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('user_token')}`
                },
                body: data
            })

            if (result.ok) {
                const success = await result.json()
                this.setState({
                    submitted: true,
                    submitPrompt: false,
                    successMsg: success,
                    selectMsgVisible: true
                })
            }

            else {
                const err = await result.json()
                console.log(err)
                this.setState({
                    errorMsg: err,
                    submitPrompt: false,
                    selectMsgVisible: true
                })
            }
        }
    }

    closeModal = () => {
        this.setState({
            applyPrompt: false
        })
    }
    closeSubmitModal = () => {
        this.setState({
            submitPrompt: false
        })
    }

    getResumes = async () => {

        let resumeOptions = []
        let resumes = []

        const result = await fetch("http://localhost:3000/resumes", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('user_token')}`
            }
        })
        if (result.ok) {
            const value = await result.json()
            const files = value["files"]
            files.map((file, idx) => {
                resumeOptions[idx] = { key: idx, value: idx, text: `Resume ${idx + 1}` }
                resumes[idx] = file
            })

        }
        else {
            const err = await result.json()
            this.setState({
                errorMsg: err,
                selectMsgVisible: true
            })
        }

        return [resumeOptions, resumes]
    }


    handleSelect = (event, data) => {
        const { resumeFiles } = this.state
        let resumeIdx = event.target.textContent.split(" ")[1]
        this.setState({
            selectedFile: resumeFiles[resumeIdx - 1],
            applyPrompt: false,
            submitPrompt: true,
            resumeId: resumeIdx
        })
    }

    handleUpload = () => {
        this.setState({
            applyPrompt: false,
            submitPrompt: true
        })
    }

    handleChoose = (event) => {
        const selFile = chooseFile(event.target.files[0])
        console.log(selFile)
        this.setState(selFile)
    }

    handleDismissMsg = () => {
        this.setState({
            selectMsgVisible: false
        })
    }

    render() {
        const { applyPrompt, submitPrompt, errorMsg, resumes, resumeId, selectMsgVisible, successMsg, selectedFile } = this.state
        return (
            <div>
                {
                    successMsg && successMsg.message && selectMsgVisible && 
                    <Message positive size='medium' onDismiss={this.handleDismissMsg} style={{marginBottom: '20px'}}>
                        <Message.Header>
                            {successMsg.message}
                        </Message.Header>
                    </Message>
                }
                {
                    errorMsg && errorMsg.apply_error && selectMsgVisible && 
                    <Message negative size='medium' onDismiss={this.handleDismissMsg} style={{marginBottom: '20px'}}>
                        <Message.Header>
                            {errorMsg.apply_error}
                        </Message.Header>
                    </Message>
                }
                {
                    applyPrompt &&
                    <Modal open={applyPrompt} onClose={this.closeModal} style={{ position: 'relative' }}>
                        <Modal.Header style={{ fontSize: '1.5em' }} >
                            Apply for this job
                            </Modal.Header>
                        <Modal.Content style={{ fontSize: '1em' }} >
                            Attach Resume
                                {
                                errorMsg && errorMsg.resume_error && selectMsgVisible &&
                                <Message negative size='small' onDismiss={this.handleDismissMsg}>
                                    <Message.Header>
                                        {errorMsg.resume_error}
                                    </Message.Header>
                                </Message>
                            }
                        </Modal.Content>
                        <Modal.Actions>

                            <Button.Group>
                                <Dropdown text='Select' selection clearable options={resumes} onChange={this.handleSelect} style={{ backgroundColor: '#b5cc18' }} className='upward' />

                                <Button.Or />
                                {/* <Button icon color='olive' labelPosition='right' onClick={this.handleUpload}>
                                    <Icon name='upload' />
                                        Upload
                                    </Button> */}
                                    {
                                        selectedFile ? (
                                            <Button icon labelPosition='right' floated='right' color='olive' onClick={this.handleUpload}>
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
                                                    <input type='file' size='small' ref={this.fileInputRef} onChange={this.handleChoose} style={{ display: 'none' }} />
                                                </div>
    
                                            )
                                    }
                            </Button.Group>

                        </Modal.Actions>
                    </Modal>

                }
                {
                    submitPrompt &&
                    <Modal open={submitPrompt} onClose={this.closeSubmitModal} style={{ position: 'relative' }}>
                        <Modal.Header style={{ fontSize: '1.5em' }} >
                            Apply with the selected resume
                            </Modal.Header>
                        <Modal.Content style={{ fontSize: '1em' }} >
                            Selected Resume : Resume {resumeId}
                            {errorMsg && errorMsg.submit_error && selectMsgVisible &&
                                <Message negative size='small' onDismiss={this.handleDismissMsg}>
                                    <Message.Header>
                                        {errorMsg.submit_error}
                                    </Message.Header>
                                </Message>}
                        </Modal.Content>
                        <Modal.Actions>
                            <Button.Group>
                                <Button icon color='olive' labelPosition='right' onClick={this.handleApply}>
                                    <Icon name='sign in' />
                                        Submit
                                    </Button>
                                <Button icon color='olive' labelPosition='right' onClick={this.closeSubmitModal} style={{ marginLeft: '20px' }}>
                                    <Icon name='cancel' />
                                        Cancel
                                    </Button>
                            </Button.Group>
                        </Modal.Actions>
                    </Modal>
                }
            </div>
        )
    }
}

export default JobApplication