import React, { Component } from 'react';


class Resumes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            resumeFrames: [],
            activeResumeIndex: 0,
            selectMsgVisible: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            resumeFrames: nextProps.resumeFrames,
            activeResumeIndex: nextProps.activeResumeIndex,
            selectMsgVisible: nextProps.resumeFrames.length === 0
        })
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
                    No resumes to display
                </Message.Header>
            </Message>
        )
    }

    render() {
        const { resumeFrames, activeResumeIndex } = this.state
        return (
            <div>
                {
                    resumeFrames.length !== 0 ? resumeFrames[activeResumeIndex - 1] : this.renderMessage
                }
            </div>

        )
    }

}

export default Resumes