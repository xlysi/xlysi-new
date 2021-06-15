import React, { Component } from "react";
import { Header, Segment, Container, Message, Grid, Button, List, Ref, Rail, Sticky } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';
import EnterprisePortals from "./services/EnterprisePortals";
import CRMSolutions from "./services/CRMSolutions";
import AppDevMaintenance from "./services/AppDevMaintenance";
import QualityAssuranceTesting from "./services/QualityAssuranceTesting";
import InfoManagement from "./services/InfoManagement";

export default class ServicesPage extends Component {

    handleClickEnterPortal = () => {
        document.getElementById('enterprise-portals').scrollIntoView({behavior: "smooth"})
    }

    handleClickCRMSol = () => {
        document.getElementById('crm-solutions').scrollIntoView({behavior: "smooth"})
    }

    handleClickAppDev = () => {
        document.getElementById('app-dev').scrollIntoView({behavior: "smooth"})
    }

    handleClickQualAssure = () => {
        document.getElementById('quality-assurance').scrollIntoView({behavior: "smooth"})
    }

    handleClickInfoMgmt = () => {
        document.getElementById('info-mgmt').scrollIntoView({behavior: "smooth"})
    }

    render() {
        return (
            <div id='services'>
                <Message size='huge' color='black' inverted style={{ minHeight: '550px', marginRight:'0' }}>
                    <Container style={{ marginTop: '75px' }}>
                        <Header as='h1' size='huge'>
                            Services
                        </Header>
                        <p>
                            Xlysi collaborates with customers to cost effectively plan, execute and deliver high-quality technology
                        consulting services. Xlysi consultants are seasoned professionals who build long-term, trusted relationships
                        and bring a high level of energy, integrity, experience and value to client work. In addition,
                        Xlysi has partnerships with some of the best-in-class technology vendors, enabling it to remain
                        objective while working with clients to determine the most appropriate solution to meet their
                        business requirements.
                        </p>
                        <p>
                            Xlysi maintains its high standards of performance by aggressively recruiting and
                        developing the highest level of talent. Our consultants come from top universities and technology
                        training centers with proven experience in a variety of industries. On joining the company,
                        the consultants receive extensive initial training, accompanied by ongoing in-house training to
                        help them keep abreast of new trends in technology. A technology-based approach to recruiting facilitates
                        consultants from various professions and backgrounds to work together, broaden their individual knowledge
                        and skills, and blend their expertise in various industry and service practices.
                        </p>
                    </Container>
                </Message>
                <Container style={{ marginTop: '75px' }} textAlign='center'>
                    <Header as='h2' textAlign='center' style={{ fontSize: '2em' }}>
                        Our Services
                    </Header>
                    <div id='servicegroup'>
                        <Button.Group widths={5}>
                            <Button color='olive' size='huge' onClick={this.handleClickEnterPortal}>
                                Enterprise Portals
                            </Button>
                            <Button color='olive' size='huge' onClick={this.handleClickCRMSol}>
                                CRM Solutions
                            </Button>
                            <Button color='olive' size='huge' onClick={this.handleClickAppDev}>
                                Application Development and Maintenance
                            </Button>
                            <Button color='olive' size='huge' onClick={this.handleClickQualAssure}>
                                Quality Assurance and Testing
                            </Button>
                            <Button color='olive' size='huge' onClick={this.handleClickInfoMgmt}>
                                Information Management
                            </Button>
                        </Button.Group>
                    </div>
                </Container>

                <EnterprisePortals style={{ marginTop: '100px' }} />
                <CRMSolutions style={{ marginTop: '100px' }} />
                <AppDevMaintenance style={{ marginTop: '100px' }} />
                <QualityAssuranceTesting style={{ marginTop: '100px' }} />
                <InfoManagement style={{ marginTop: '100px' }} />

            </div>
        )
    }


}

