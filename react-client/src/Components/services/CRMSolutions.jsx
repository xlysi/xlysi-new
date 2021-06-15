import React, { Component } from "react"
import { Segment, Header, Grid, Button, Icon } from 'semantic-ui-react'

class CRMSolutions extends Component {

    handleClick = () => {
        document.getElementById('servicegroup').scrollIntoView({behavior: "smooth"})
    }

    handleGoToTop = () => {
        document.getElementById('services').scrollIntoView({behavior: "smooth"})
    }

    render() {
        return (
            <div id='crm-solutions'>
                <Segment vertical padded style={{ minHeight: '550px' }} >
                    <Grid container style={{ marginLeft: '50px', marginTop: '75px' }}>
                        <Grid.Row verticalAlign='middle' style={{ fontSize: '1.33em' }}>
                            <Header as='h2' size='huge'>
                                CRM Solutions
                                </Header>
                            <p>
                                Xlysi collaborates with customers to cost effectively plan, execute and deliver high-quality
                                technology consulting services. Xlysi consultants are seasoned professionals who build long-term,
                                trusted relationships and bring a high level of energy, integrity, experience and value to client
                                work. In addition, Xlysi has partnerships with some of the best-in-class technology vendors,
                                enabling it to remain objective while working with clients to determine the most appropriate
                                solution to meet their business requirements.
                                </p>
                            <p>
                                Xlysi maintains its high standards of performance by aggressively recruiting and developing the
                                highest level of talent. Our consultants come from top universities and technology training centers
                                with proven experience in a variety of industries. On joining the company, the consultants receive
                                extensive initial training, accompanied by ongoing in-house training to help them keep abreast of new
                                trends in technology. A technology-based approach to recruiting facilitates consultants from various
                                professions and backgrounds to work together, broaden their individual knowledge and skills, and blend
                                their expertise in various industry and service practices.
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

export default CRMSolutions;