import React, { Component } from 'react';
import { Message, Container, Header, Dropdown, Grid, Input, Button, Icon } from 'semantic-ui-react'
import JobPage from './JobPage';


class Careers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobTitleOptions: [],
            locationOptions: [],
            postedOptions: [
                {
                    key: 1,
                    text: "Past 24 hours",
                    value: 1

                },
                {
                    key: 2,
                    text: "Past Week",
                    value: 2
                }
            ],
            filters: {
                jobFilter: '',
                locationFilter: '',
                postedFilter: ''
            }
            
        }
        this.buildOptions = this.buildOptions.bind(this)
        this.getJobTitles = this.getJobTitles.bind(this)
        this.getLocations = this.getLocations.bind(this)
        this.onChangeJobTitle = this.onChangeJobTitle.bind(this)
        this.onChangeLocation = this.onChangeLocation.bind(this)
        this.onChangePosted = this.onChangePosted.bind(this)
    }

    componentDidMount() {
        // console.log("Careers component has mounted")
        this.getJobTitles()
        this.getLocations()
        // console.log(this.state.jobTitleOptions.length)
    }

    buildOptions = (items, job_title) => {
        var options = []
        // console.log('Build options accessed')
        for (let i = 0; i < items.length; i++) {
            var option = {}
            option['key'] = i
            option['value'] = i
            option['text'] = job_title ? items[i].job_title : items[i].location_name
            options.push(option)
            // console.log(option)
        }
        return options;
    }

    getJobTitles() {
        // console.log("Get Job titles accesses")
        fetch('http://localhost:3000/crud/job_title')
            .then(response => { return response.json() })
            .then(items => this.setState({ jobTitleOptions: this.buildOptions(items, true) }))
            .catch(err => console.log(err))
    }



    getLocations() {
        fetch('http://localhost:3000/crud/location_name')
            .then(response => { return response.json() })
            .then(items => this.setState({ locationOptions: this.buildOptions(items, false) }))
            .catch(err => console.log(err))
    }

    onChangeJobTitle = (event, data) => {
        // console.log(data)
        // console.log(event)
        this.setState({filters: {...this.state.filters, jobFilter: event.target.textContent}})
    }

    onChangeLocation = (event,data) => {
        // console.log(data)
        // console.log(event)

        this.setState({filters: {...this.state.filters, locationFilter: event.target.textContent}})
    }

    onChangePosted = (event, data) => {
        // console.log(data)
        // console.log(event.target)

        this.setState({filters: {...this.state.filters, postedFilter: event.target.textContent}})
    }



    render() {
        return (
            <div>
                <Message size='huge' color='black' inverted style={{ minHeight: '400px', marginBottom:'0' }}>
                    <div>
                        <Container style={{ marginTop: '75px' }}>
                            <Header as='h1' size='huge' textAlign='center'>
                                Careers at XLYSI
                            </Header>
                        </Container>
                        <Container textAlign='center' style={{ marginTop: '75px' }} >
                            <Dropdown placeholder="Job Title" search selection clearable options={this.state.jobTitleOptions} onChange={this.onChangeJobTitle} />
                            <Dropdown placeholder="Location" search selection clearable options={this.state.locationOptions} onChange={this.onChangeLocation} style={{ marginLeft: '50px' }} />
                            <Dropdown placeholder="Posted" search selection clearable
                                options={this.state.postedOptions} 
                                onChange={this.onChangePosted}
                                style={{ marginLeft: '50px' }} />
                        </Container>
                    </div>

                </Message>
                <JobPage filters={this.state.filters}/>


            </div >

        )
    }


}
export default Careers