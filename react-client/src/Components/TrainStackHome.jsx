import React, { Component } from 'react'
import { Segment, Image, Header, Grid, Button, Icon, Container } from 'semantic-ui-react'
import { Fade } from 'react-awesome-reveal'

class TrainStackHome extends Component {

    handleClickWebs = () => {
        document.getElementById('ibmwbs').scrollIntoView({ behavior: "smooth" })
    }
    handleClickOAS = () => {
        document.getElementById('oracleas').scrollIntoView({ behavior: "smooth" })
    }
    handleClickLiferay = () => {
        document.getElementById('liferay').scrollIntoView({ behavior: "smooth" })
    }
    handleClickSharep = () => {
        document.getElementById('sharepoint').scrollIntoView({ behavior: "smooth" })
    }
    handleClickSAPN = () => {
        document.getElementById('sapnet').scrollIntoView({ behavior: "smooth" })
    }
    handleClick = () => {
        document.getElementById('productgroup').scrollIntoView({ behavior: "smooth" })
    }
    handleGoToTop = () => {
        document.getElementById('homepage').scrollIntoView({ behavior: "smooth" })
    }

    render() {


        return (
            <div>
                <Segment vertical textAlign='center' padded='very' size='massive' color='black' inverted style={{ minHeight: '550px', marginRight:'0' }}>
                    <Header as='h1' style={{ fontSize: '4em', marginTop: '1.5em' }}>
                        XLYSI
                    </Header>
                    <Header as='h2' style={{ fontSize: '1.7em', marginTop: '1em' }}>
                        Expert Portal Solutions
                    </Header>
                </Segment>
                <Segment id='productgroup' vertical padded style={{ minHeight: '550px' }}>
                    <Container style={{ marginTop: '75px' }} textAlign='center'>
                        <Header as='h2' textAlign='center' style={{ fontSize: '2em' }}>
                            Products and Solutions
                        </Header>
                        <div >
                            <Button.Group widths={5}>
                                <Button color='olive' size='huge' onClick={this.handleClickWebs}>
                                    Java WebSphere Portal
                            </Button>
                                <Button color='olive' size='huge' onClick={this.handleClickOAS}>
                                    Oracle Application Server
                            </Button>
                                <Button color='olive' size='huge' onClick={this.handleClickLiferay}>
                                    Liferay Portal Development
                            </Button>
                                <Button color='olive' size='huge' onClick={this.handleClickSharep}>
                                    Sharepoint
                            </Button>
                                <Button color='olive' size='huge' onClick={this.handleClickSAPN}>
                                    SAP NetWeaver
                            </Button>
                            </Button.Group>
                        </div>
                    </Container>
                    <Grid>
                        <Grid.Row id='ibmwbs' style={{ marginTop: '200px' }}>
                            <Grid.Column width={6} verticalAlign='middle'>
                                <Image src='ibmwbs.png' size='large' centered />
                            </Grid.Column>
                            <Grid.Column width={9} textAlign='justified' verticalAlign='middle'>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Java Websphere Portal
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    XLYSI provides end-to-end SOA integration and consulting services specializing in IBM Websphere Technology.
                            Our services related to Websphere Portal include planning and designing a Websphere Portal Environment,
                            Administartion, Authorization and Rebranding.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row >
                            <Grid.Column width={3} textAlign='center' floated='right'>
                                <Button color='olive' icon labelPosition='right' size='big' onClick={this.handleClick}>
                                    <Icon name='up arrow' />
                                    Back to Products
                                    </Button>
                            </Grid.Column>
                            <Grid.Column width={3} textAlign='center' style={{ marginRight: '375px' }}>
                                <Button color='olive' icon labelPosition='right' size='big' onClick={this.handleGoToTop}>
                                    <Icon name='up arrow' />
                                    Back to Top
                                    </Button>
                            </Grid.Column>

                        </Grid.Row>
                        <Grid.Row id='oracleas' style={{ marginTop: '200px', marginLeft: '50px' }}>
                            <Grid.Column width={9} textAlign='justified' verticalAlign='middle' padded centered>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Oracle Application Server
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    Our Oracle consultants have the experience and expertise to get your organization utilizing your data and applications
                                    to their maximum performance capabilities and have proven commercial experience with some of the largest and successful
                                    organizations around today.
                                </p>
                            </Grid.Column>
                            <Grid.Column width={6} verticalAlign='middle'>
                                <Image src='oracleas.png' size='large' centered />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3} textAlign='center'  style={{ marginLeft: '60px' }}>
                                <Button color='olive' icon labelPosition='right' size='big' onClick={this.handleClick}>
                                    <Icon name='up arrow' />
                                    Back to Products
                                    </Button>
                            </Grid.Column>
                            <Grid.Column width={3} textAlign='center' >
                                <Button color='olive' icon labelPosition='right' size='big' onClick={this.handleGoToTop}>
                                    <Icon name='up arrow' />
                                    Back to Top
                                    </Button>
                            </Grid.Column>

                        </Grid.Row>

                        <Grid.Row id='liferay' style={{ marginTop: '200px'}}>
                            <Grid.Column width={6} verticalAlign='middle'>
                                <Image src='lr.png' size='large' centered />
                            </Grid.Column>
                            <Grid.Column width={9} textAlign='justified' verticalAlign='middle'>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Liferay Portal Development
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    Our portal consulting services enable our customers to utilize the power of real-time information
                                    inclusing Intranet and collaboration platforms. We have integrated with all enterprise applications.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3} textAlign='center' floated='right'>
                                <Button color='olive' icon labelPosition='right' size='big' onClick={this.handleClick}>
                                    <Icon name='up arrow' />
                                    Back to Products
                                    </Button>
                            </Grid.Column>
                            <Grid.Column width={3} textAlign='center' style={{ marginRight: '375px' }}>
                                <Button color='olive' icon labelPosition='right' size='big' onClick={this.handleGoToTop}>
                                    <Icon name='up arrow' />
                                    Back to Top
                                    </Button>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row id='sharepoint' style={{ marginTop: '200px', marginLeft: '50px' }}>
                            <Grid.Column width={9} textAlign='justified' verticalAlign='middle' padded centered>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Sharepoint
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    Our team provides services for installing, configuring, developing customized web parts, migrations,
                                    troubleshooting implementation issues and solutions that use Windows Sharepoint Technologies.
                                </p>
                            </Grid.Column>
                            <Grid.Column width={6} verticalAlign='middle'>
                                <Image src='sharepoint-kreisgrafik-removebg-preview.png' size='large' centered />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row >
                        <Grid.Column width={3} textAlign='center'  style={{ marginLeft: '60px' }}>
                                <Button color='olive' icon labelPosition='right' size='big' onClick={this.handleClick}>
                                    <Icon name='up arrow' />
                                    Back to Products
                                    </Button>
                            </Grid.Column>
                            <Grid.Column width={3} textAlign='center' >
                                <Button color='olive' icon labelPosition='right' size='big' onClick={this.handleGoToTop}>
                                    <Icon name='up arrow' />
                                    Back to Top
                                    </Button>
                            </Grid.Column>

                        </Grid.Row>
                        <Grid.Row id='sapnet' style={{ marginTop: '200px' }}>
                            <Grid.Column width={6} verticalAlign='middle'>
                                <Image src='snw-removebg-preview.png' size='large' centered />
                            </Grid.Column>
                            <Grid.Column width={9} textAlign='justified' verticalAlign='middle'>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    SAP NetWeaver
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    We specialize in delivering high quality solutions based on SAP NetWeaver Sun J2EE technologies that
                                    are customized to meet the needs of our clients. We value our customers and believe very strongly in building
                                    long lasting customer relationships.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row >
                            <Grid.Column width={3} textAlign='center' floated='right'>
                                <Button color='olive' icon labelPosition='right' size='big' onClick={this.handleClick}>
                                    <Icon name='up arrow' />
                                    Back to Products
                                    </Button>
                            </Grid.Column>
                            <Grid.Column width={3} textAlign='center' style={{ marginRight: '375px' }}>
                                <Button color='olive' icon labelPosition='right' size='big' onClick={this.handleGoToTop}>
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

export default TrainStackHome;