import React, { Component } from "react"
import { Segment, Header, Grid, Button, Icon } from 'semantic-ui-react'

class EnterprisePortals extends Component {
    handleClick = () => {
        document.getElementById('servicegroup').scrollIntoView({behavior: "smooth"})
    }

    handleGoToTop = () => {
        document.getElementById('services').scrollIntoView({behavior: "smooth"})
    }

    render() {
        return (
            <div id='enterprise-portals'>
                <Segment vertical padded style={{ minHeight: '550px' }} >
                    <Grid container style={{ marginLeft: '50px', marginTop: '75px' }}>
                        <Grid.Row verticalAlign='middle' style={{ fontSize: '1.33em' }}>
                            <Header as='h2' size='huge'>
                                Enterprise Portals
                                </Header>
                            <p>
                                With the emergence of a global economy and a mobile workforce, and the resulting flood of
                                business data, the ability to integrate applications, collaborate across boundaries, and
                                customize content through corporate portals has become essential. Xlysis enterprise portal
                                solutions, based on IBM Websphere, Oracle Weblogic, MS SharePoint, provide these capabilities
                                by bringing just the right application and information to each employee through highly flexible
                                intranet sites while providing insight to your operations through dashboard or expediting the
                                supply chain and collaborating with customers and suppliers through extranets.
                                </p>
                            <p>
                                Corporate portals can be designed to deliver different content to different individuals, ensuring
                                that each user sees only what is applicable to him or her. By targeting the appropriate data and
                                information, the technology tailors it to an individuals specific needs or role to perform their
                                job function.
                                </p>
                            <p>
                                Corporate portals serve as a consistent platform for developing and delivering internal applications,
                                and as a system to improve and direct workflow for business processes. They also become a
                                foundational environment for integrating and launching applications like Microsoft Office programs,
                                business intelligence scorecards, or custom software tools and for delivering reports and business
                                scorecards to monitor key performance indicators. Because they are password protected, corporate
                                portals make it easy for your employees to access the tools and documents they need via the web,
                                from any computer, no matter where they are.
                                </p>
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

export default EnterprisePortals;