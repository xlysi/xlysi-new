import React, { Component } from "react"
import { Segment, Header, Grid, List, Button, Icon } from 'semantic-ui-react'

class InfoManagement extends Component {

    handleClick = () => {
        document.getElementById('servicegroup').scrollIntoView({behavior: "smooth"})
    }

    handleGoToTop = () => {
        document.getElementById('services').scrollIntoView({behavior: "smooth"})
    }

    render() {
        return (
            <div id='info-mgmt'>
                <Segment vertical padded style={{ minHeight: '550px' }} >
                    <Grid container style={{ marginLeft: '50px', marginTop: '75px' }}>
                        <Grid.Row verticalAlign='middle' style={{ fontSize: '1.33em' }}>
                            <Header as='h2' size='huge'>
                                Information Management
                                </Header>
                            <p>
                                Our consultants span a wide spectrum of experience in industries like Financial and Banking services,
                                pharmaceutical, manufacturing, Media-publishing, Automobile and Government departments. Some of the
                                most common services we offer our clients are:
                                </p>
                            <List>
                                <List.Item style={{ marginTop: '20px' }}>
                                    <List.Header as='h3' style={{ fontSize: '1.4em' }}>
                                        Project Management Services
                                        </List.Header>
                                    <p>
                                        Organisations need experienced professionals to bring consistent Project Management discipline
                                        and reduce the risk of complex IT initiatives. Xlysi’s Project Management Services provide the
                                        quality, cost control and managed risk to successful completion of project.
                                        </p>
                                </List.Item>
                                <List.Item style={{ marginTop: '20px' }}>
                                    <List.Header as='h3' style={{ fontSize: '1.4em' }}>
                                        System Design & Planning
                                        </List.Header>
                                    <p>
                                        Xlysi’s architects, business analysts and system analysts provide the design and planning
                                        expertise to get an initiative off the ground successfully. Our specialists are skilled at
                                        building a solution blueprint that leverages on existing architecture while positioning
                                        client to achieve ever-changing business objectives.
                                        </p>
                                </List.Item>
                                <List.Item style={{ marginTop: '20px' }}>
                                    <List.Header as='h3' style={{ fontSize: '1.4em' }}>
                                        Software Development
                                        </List.Header>
                                    <p>
                                        Xlysi’s software engineers and developers have the experience to contribute to the clients
                                        project at any point – from the start to becoming a replacement. Our strength in this area
                                        comes from our experience as software developers. Our processes and procedures ensure meeting
                                        the client expectations at every step. We will dedicate one different coordinator to each
                                        client who will be the direct point of contact.
                                        </p>
                                </List.Item>
                                <List.Item style={{ marginTop: '20px' }}>
                                    <List.Header as='h3' style={{ fontSize: '1.4em' }}>
                                        Quality Assurance/System Testing
                                        </List.Header>
                                    <p>
                                        Xlysi offers clients the QA and system testing expertise that is required to meet rapid
                                        time-to-market demands. Our consultants have hands on experience on HP tools like Quality
                                        Center, Load Runner, Winrunner and QTP. Our team of testers can guide in establishing the
                                        benchmarks and procedures for a successful rollout.
                                        </p>
                                </List.Item>
                            </List>
                        </Grid.Row>
                        <Grid.Row textAlign='center'>
                            <Grid.Column width={7}>
                                <Button color='olive' icon labelPosition='right' size='large' onClick={this.handleClick}>
                                    <Icon name='up arrow' />
                                    Back to Services
                                    </Button>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Button color='olive' icon labelPosition='right' size='large' onClick={this.handleGoToTop}>
                                    <Icon name='up arrow' />
                                    Back to Top
                                    </Button>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Segment>

            </div>

        )
    }
}

export default InfoManagement;
