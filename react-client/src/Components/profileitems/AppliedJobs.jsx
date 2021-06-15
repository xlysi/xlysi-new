import React, { Component } from 'react';
import { List, Divider } from 'semantic-ui-react';

class AppliedJobs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            appliedJobs: [],
            selectMsgVisible: false
        }

        this.handleDismissMsg = this.handleDismissMsg.bind(this)
        this.renderMessage = this.renderMessage.bind(this)
        this.renderAppliedJobs = this.renderAppliedJobs.bind(this)
        this.getAppliedJobs = this.getAppliedJobs.bind(this)
    }

    handleDismissMsg = () => {
        this.setState({
            selectMsgVisible: false
        })
    }

    renderMessage = () => {
        const {selectMsgVisible} = this.state
        return (
            selectMsgVisible && 
            <Message negative size='medium' onDismiss={this.handleDismissMsg} style={{ marginBottom: '20px' }}>
                <Message.Header>
                    No applied jobs
                </Message.Header>
            </Message>
        )
    }

    getAppliedJobs = async() => {

        const result = await fetch("http://localhost:3000/appliedJobs", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('user_token')}`
            }
        })
        if(result.ok){
            const body = await result.json()
            this.setState({
                appliedJobs: body['appliedJobs']
            })
        }
        else {
            this.setState({
                selectMsgVisible: true
            })
        }
    }

    renderAppliedJobs = () => {
        let jobItems = []
        for (let job in appliedJobs){
            jobItems.push(
                <List.Item>
                    <List.Header>
                        {job['job_title']}
                    </List.Header>
                    <p>
                        {job['location_name']}
                    </p>
                    <Divider style={{ width: '20%', marginBottom: '0' }} />
                    <p style={{ marginBottom: '20px' }}>{job['posted'].split("T")[0]}</p>
                </List.Item>
            )
        }
        return jobItems
    }

    render() {
        return (
            appliedJobs.length !==0 ? 
            <List>
                {this.renderAppliedJobs()}
            </List> :
            <div>
                {this.renderMessage}
            </div>
            
        )
    }
}