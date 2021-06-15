import React, { Component } from 'react';
import { Grid, Menu, Embed, Loader, Message, Header, Dropdown, Segment, Button, Icon } from 'semantic-ui-react';
import fs from 'fs'
import { Link } from 'react-router-dom';
import Resumes from './profileitems/Resumes';


class ProfileMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeItem: {},
            resumeOptions: [],
            resumeFrames: [],
            activeResumeIndex: 1,
            selectMsgVisible: true
        }
        this.getResumes = this.getResumes.bind(this)
        this.handleClickResume = this.handleClickResume.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.getResumes().then(resumes => {
            this.setState({
                resumeFrames: resumes
            })
        })

    }



    getResumes = async () => {

        let resumeFrames = []

        const result = await fetch("http://localhost:3000/resumes", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('user_token')}`
            }
        })
        if (result.ok) {
            const value = await result.json()
            const files = value["files"]
            for (let i = 0; i < files.length; i++) {

                const file = files[i]
                let base64 = ""

                if (file.indexOf("0M8R4KGxGu") === 0) {
                    base64 = `data:application/msword;base64,${file}`

                }
                else if (file.indexOf("JVBER") === 0) {
                    base64 = `data:application/pdf;base64,${file}`
                }

                resumeFrames.push(<Embed active={true} url={base64} style={{ height: '300px' }} />)
            }
        }
        else {
            resumeFrames.push(
                <Message negative >
                    <Header as='h3'> No Resumes Uploaded</Header>
                </Message>)
        }

        return resumeFrames
    }

    handleClickResume = (event, data) => {
        this.setState({
            activeResumeIndex: data.value
        })
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    renderSegment = () => {
        const {activeItem, resumeFrames,activeResumeIndex} = this.state
        let itemRender = null
        switch(activeItem) {
            case "resumes": 
                itemRender = <Resumes resumeFrames={resumeFrames} activeResumeIndex={activeResumeIndex} /> 
                break
            
        }
    }

    

    render() {
        const { activeItem, activeResumeIndex, resumeFrames, resumesEncoded } = this.state

        const options = [
            { key: 1, text: 'Resume 1', value: 1 },
            { key: 2, text: 'Resume 2', value: 2 },
            { key: 3, text: 'Resume 3', value: 3 },
        ]

        return (
            <div>
                <Grid>
                    <Grid.Column width={6} style={{ marginLeft: '5px' }}>
                        <Menu fluid vertical tabular secondary color='black' inverted style={{ minHeight: '500px' }} >
                            <Menu.Item name="resumes" active={activeItem === "resumes"} as='dropdown' onClick={this.handleItemClick}>
                                <Header as='h3' color='olive' style={{ marginBottom: '0', marginTop: '10px' }}>Resumes</Header>
                                <p>Save upto 3 resumes</p>
                                <Dropdown selection defaultValue={1} options={options} onChange={this.handleClickResume} style={{ width: '10%' }} />
                            </Menu.Item>
                            <Menu.Item name="appJobs" active={activeItem === "appJobs"} onClick={this.handleItemClick}>
                                <Header as='h3' color='olive' style={{ marginBottom: '0', marginTop: '10px' }}>Applied Jobs</Header>
                            </Menu.Item>
                            <Menu.Item name="savedJobs" active={activeItem === "savedJobs"} onClick={this.handleItemClick}>
                                <Header as='h3' color='olive' style={{ marginBottom: '0', marginTop: '10px' }}>Saved Jobs</Header>
                            </Menu.Item>
                            <Menu.Item name="timesheets" active={activeItem === "timesheets"} onClick={this.handleItemClick}>
                                <Header as='h3' color='olive' style={{ marginBottom: '0', marginTop: '10px' }}>Time Sheets</Header>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Segment style={{ border: '0', marginTop: '10px', minHeight: '300px' }}>
                            {resumeFrames.length !== 0 ? resumeFrames[activeResumeIndex - 1] :
                                <Message negative size='medium' onDismiss={this.handleDismissMsg} style={{ marginBottom: '20px' }}>
                                    <Message.Header>
                                        {errorMsg.apply_error}
                                    </Message.Header>
                                </Message>
                            }
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default ProfileMenu