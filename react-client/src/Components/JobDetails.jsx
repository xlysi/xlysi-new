import React, { Component, createRef } from 'react';
import { Header, Icon, Loader, Grid, Button, Container, List, Modal, Dropdown, Message } from 'semantic-ui-react';
import JobApplication from './job/JobApplication';
import { history } from './AppRouter';
import { useLocation } from 'react-router-dom'

class JobDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeJob: {},
            applyPrompt: false,
            selectMsgVisible: false,
            errorMsg: "",
            successMsg: ""
        }
        this.divideListIntoColumns = this.divideListIntoColumns.bind(this)
        this.renderJobDetails = this.renderJobDetails.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ activeJob: nextProps.activeJob })
    }

    renderJobDetails = (activeJob, property) => {


        if (activeJob[property] !== null) {

            let detailHead = ""

            switch (property) {
                case "job_description":
                    detailHead = "Job Description : "
                    break

                case "required_exp":
                    detailHead = "Required Experience : "
                    break

                case "preferred_exp":
                    detailHead = "Preferred Experience : "
                    break

                default:
            }
            // console.log(property + "    " + activeJob[property])
            return (
                <Grid.Row style={{ marginTop: '20px' }}>
                    <Container textAlign='justified'>
                        <Header as='h4' style={{ fontSize: '1em' }}>
                            {detailHead}
                        </Header>
                        <List bulleted>
                            {activeJob[property].map((item => {
                                return (<List.Item>
                                    {item}
                                </List.Item>)
                            }))}
                        </List>
                    </Container>

                </Grid.Row>
            )
        }
    }

    renderSkills = (activeJob) => {
        if (activeJob["skills_req"] !== null) {
            // console.log("Active Job  :  " + JSON.stringify(activeJob))
            // console.log("Skills : " + activeJob["skills_req"].length + "    " + activeJob["skills_req"])
            return (
                <Grid.Row style={{ marginTop: '20px' }}>
                    <Header as='h4' style={{ fontSize: '1em', marginBottom: '10px' }}>
                        Skills :
                        </Header>
                    {this.divideListIntoColumns(activeJob["skills_req"])}
                </Grid.Row>
            )
        }
    }

    divideListIntoColumns = (list) => {
        var tempList = JSON.parse(JSON.stringify(list))
        var columns = []
        var column = []
        var colLength = Math.floor(list.length / 4)
        while (tempList[0]) {
            for (let i = 0; i < colLength; i++) {
                if (tempList[0]) {
                    column.push(tempList.shift())
                }
            }

            columns.push(column)
            column = []

        }
        // console.log("Dividing list into columns")

        return (
            columns.map(col => {
                return (
                    <Grid.Column width={3}>
                        <List bulleted>
                            {col.map(skill =>
                                <List.Item>
                                    {skill}
                                </List.Item>
                            )}
                        </List>
                    </Grid.Column>
                )

            })
        )
    }

    handleApplyPrompt = () => {
        this.setState({
            applyPrompt: true
        })

    }

    handleSaveJob = async () => {
        const { activeJob } = this.state
        if (localStorage.getItem('user_token')) {
            const result = await fetch("http://localhost:3000/saveJob", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('user_token')}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(activeJob)
            })

            if (result.ok) {
                const msg = await result.json()
                this.setState({
                    selectMsgVisible: true,
                    successMsg: msg
                })
            }
            else {
                const err = await result.json()
                this.setState({
                    errorMsg: err,
                    selectMsgVisible: true
                })
            }

        } else {
            let location = useLocation();
            localStorage.setItem("activeItem", "login")
            history.push({ pathname: "/login", state: { "from": location.pathname } })
        }

    }

    handleDismissMsg = () => {
        this.setState({
            selectMsgVisible: false
        })
    }


    render() {
        const { activeJob, applyPrompt, successMsg, errorMsg, selectMsgVisible } = this.state
        if (activeJob !== undefined && Object.keys(activeJob).length !== 0) {
            return (

                <div>
                    <JobApplication activeJob={activeJob} applyPrompt={applyPrompt} />
                    {
                        successMsg && selectMsgVisible && 
                        <Message positive size='medium' onDismiss={this.handleDismissMsg} style={{ marginBottom: '20px' }}>
                            <Message.Header>
                                {successMsg.message}
                            </Message.Header>
                        </Message>
                    }
                    {
                        errorMsg && errorMsg.save_error && selectMsgVisible && 
                        <Message negative size='medium' onDismiss={this.handleDismissMsg} style={{ marginBottom: '20px' }}>
                            <Message.Header>
                                {errorMsg.save_error}
                            </Message.Header>
                        </Message>
                    }
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={10}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    <Icon name="briefcase" />
                                    {activeJob["job_title"]}
                                </Header>
                                <p>
                                    <Icon name="point" />
                                    {activeJob["location_name"]}
                                </p>
                                <p>
                                    <Icon name="time" />
                                    Posted on {activeJob["posted"].split("T")[0]}
                                </p>
                            </Grid.Column>
                            <Grid.Column width={6} textAlign='right'>
                                <Button color='olive' size='large' onClick={this.handleSaveJob}>
                                    Save
                                </Button>
                                <Button color='olive' size='large' onClick={this.handleApplyPrompt}>
                                    Apply
                                </Button>
                                <Button color='olive' size='large'>
                                    Share
                                </Button>
                            </Grid.Column>

                        </Grid.Row>
                        {this.renderJobDetails(activeJob, "job_description")}
                        {this.renderJobDetails(activeJob, "required_exp")}
                        {this.renderJobDetails(activeJob, "preferred_exp")}
                        {this.renderSkills(activeJob)}
                    </Grid>

                </div>

            )
        }
        else {
            return (
                <Header as='h3' style={{ fontSize: '2em' }}>
                    <Loader size='big' />
                </Header>
            )
        }
    }
}

export default JobDetails