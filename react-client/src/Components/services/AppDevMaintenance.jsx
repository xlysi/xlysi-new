import React, { Component } from "react"
import { Segment, Header, Grid, List, Button, Icon } from 'semantic-ui-react'

class AppDevMaintenance extends Component {

    handleClick = () => {
        document.getElementById('servicegroup').scrollIntoView({behavior: "smooth"})
    }

    handleGoToTop = () => {
        document.getElementById('services').scrollIntoView({behavior: "smooth"})
    }

    render() {
        return (
            <div id='app-dev'>
                <Segment vertical padded style={{ minHeight: '550px' }} >
                    <Grid container style={{ marginLeft: '50px', marginTop: '75px' }}>
                        <Grid.Row verticalAlign='middle' style={{ fontSize: '1.33em' }}>
                            <Header as='h2' size='huge'>
                                Application Development and Maintenance
                                </Header>
                            <p>
                                At Xlysi, we employ an application development process that is mature and well defined. This process
                                ranges from initial business case analysis to post-implementation support the full software
                                development lifecycle. Our experts work with you throughout the process to determine best
                                practices and requirements, helping ensure rapid development, testing and implementation.
                                Our development process adapts according to your project’s needs. We follow traditional
                                waterfall methodology for most development projects, as well as Agile/Scrum methodology.
                                Our development experience includes Enterprise Portals, Information Management, ecommerce sites,
                                financial applications and CRM applications using Java, J2EE, .NET, C#, IBM WebSphere, Alfresco,
                                EMC Documentum and a variety of open source technologies.
                                </p>
                            <p>
                                Xlysi has many years of experience delivering the following types of Custom Development
                                initiatives:
                                </p>
                            <List>
                                <List.Item style={{ marginTop: '20px' }}>
                                    <List.Header as='h3' style={{ fontSize: '1.4em' }}>
                                        Web Application Development
                                        </List.Header>
                                    <p>
                                        The majority of custom software applications being created today leverage a web-based development
                                        and distribution model. As internet and web browser technology evolved over the past decade,
                                        it became feasible to deliver highly functional business applications via the web. Gone are the
                                        days of having to distribute software applications on CD’s which must be installed by the user on
                                        their PC.
                                        </p>
                                </List.Item>
                                <List.Item style={{ marginTop: '20px' }}>
                                    <List.Header as='h3' style={{ fontSize: '1.4em' }}>
                                        Content Management
                                        </List.Header>
                                    <p>
                                        A common problem to website management has historically been that technical personnel are often
                                        required to maintain, update, and extend websites. A majority of the websites in existence today
                                        are essentially providing a sales and marketing function by conveying a company’s products, services,
                                        and core value proposition to the market. Although the content on this type of website is driven by
                                        the marketing department, it is often a difficult for marketing personnel to get changes made to the
                                        site. Xlysi designed and developed a website Content Management System that allows non-technical
                                        personnel to fully manage, maintain, and extend websites.
                                        </p>
                                </List.Item>
                                <List.Item style={{ marginTop: '20px' }}>
                                    <List.Header as='h3' style={{ fontSize: '1.4em' }}>
                                        E-Commerce Solutions
                                        </List.Header>
                                    <p>
                                        An increasing number of traditional brick-and-mortar businesses are looking to the Internet as an
                                        additional sales channel. These traditional business usually lack the depth and breadth of expertise
                                        required to bring a viable web-based offering to the market. Xlysi has helped many companies design
                                        and develop highly scalable online storefront websites that integrate tightly with existing back-end
                                        systems and enterprise applications.
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

export default AppDevMaintenance;