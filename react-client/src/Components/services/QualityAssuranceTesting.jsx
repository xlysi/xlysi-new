import React, { Component } from "react"
import { Segment, Header, Grid, List, Button, Icon  } from 'semantic-ui-react'

class QualityAssuranceTesting extends Component {

    handleClick = () => {
        document.getElementById('servicegroup').scrollIntoView({behavior: "smooth"})
    }

    handleGoToTop = () => {
        document.getElementById('services').scrollIntoView({behavior: "smooth"})
    }

    render() {
        return (                
                <div id='quality-assurance'>
                    <Segment vertical padded style={{ minHeight: '550px' }} >
                        <Grid container style={{ marginLeft: '50px', marginTop: '75px' }}>
                            <Grid.Row verticalAlign='middle' style={{ fontSize: '1.33em' }}>
                                <Header as='h2' size='huge'>
                                    Quality Assurance and Testing
                                </Header>
                                <p>
                                    Testing can be the Achilles heel of Agile development, as successive iterations makes it difficult
                                    to thoroughly test a new application. Xlysis Sourcing overcomes this problem by employing a Test
                                    Driven Development approach and leveraging the expertise of our own Global Testing Center
                                </p>
                                <List bulleted>
                                    <List.Item>Test lab setup</List.Item>
                                    <List.Item>Test plan and test design</List.Item>
                                    <List.Item>Installation testing</List.Item>
                                    <List.Item>Functionality testing</List.Item>
                                    <List.Item>Configuration/compatibility testing</List.Item>
                                    <List.Item>Performance testing</List.Item>
                                    <List.Item>Interoperability and standards compliance testing</List.Item>
                                    <List.Item>Regression testing</List.Item>
                                    <List.Item>Test automation/scripting</List.Item>
                                </List>
                                <List>
                                    <List.Item style={{marginTop:'20px'}}>
                                        <List.Header as='h3' style={{ fontSize: '1.4em' }}>
                                            Low Risk. High Reward
                                        </List.Header>
                                        <p>
                                            Testing is a low-risk, high-reward entry for Independent Software Vendors (ISV) looking for
                                            outsourcing services. ISVs and other software product developers need to test and qualify their
                                            products very rigorously using a variety of hardware and software configurations. Typically, the
                                            effort involves three-step iterative cycle: Build, Test and Release.
                                        </p>
                                    </List.Item>
                                    <List.Item style={{marginTop:'20px'}}>
                                        <List.Header as='h3' style={{ fontSize: '1.4em' }}>
                                            Full Range of Services
        
                                        </List.Header>
                                        <p>
                                            Xlysis Testing Services offers a range of quality assurance and testing services, which include
                                            setting up of test labs, regression testing, functional testing, compatibility testing, integration
                                            testing, automation testing rational team test and performance testing. Xlysi offers expert management
                                            and technical consulting on software testing, quality and software engineering.
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

export default QualityAssuranceTesting;