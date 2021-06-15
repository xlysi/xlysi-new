import React, { Component } from 'react';
import { Container, Grid, Menu, Segment, Header, Divider, Dropdown, Pagination } from 'semantic-ui-react';
import JobDetails from './JobDetails';

class JobPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filters: this.props.filters,
            items: [],
            activeIndex: 0,
            pageSize: 5,
            page: 1,
            totalItems: 0,
            activeItem: {}
        }
        this.getJobs = this.getJobs.bind(this)
        this.renderMenuItems = this.renderMenuItems.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
        this.handleItemsPerPage = this.handleItemsPerPage.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)
    }


    componentWillReceiveProps(nextProps) {
        this.setState({ filters: nextProps.filters }, () => {
            // console.log(this.state.filters)
            this.getJobs(this.state.page, this.state.pageSize)
        });
    }

    getJobs(page, pageSize) {
        var queryStr = ""
        var fil = this.state.filters
        var param = false

        // console.log(fil)
        queryStr = queryStr + `pageSize=${pageSize}&page=${page}`

        Object.keys(fil).forEach((key) => {
            var queryKey = ""
            switch (key) {
                case "jobFilter":
                    queryKey = "job_title"
                    break
                case "locationFilter":
                    queryKey = "location_name"
                    break
                case "postedFilter":
                    queryKey = "posted"
                    break
                default:

            }
            // console.log(`${fil[key]}`)

            if (queryKey.length !== 0 && `${fil[key]}`.length !== 0) {
                // console.log(queryKey + "       " + `${fil[key]}`)
                queryStr = queryStr + "&" + `${queryKey}=${encodeURIComponent(`${fil[key]}`)}`
            }

        })

        // console.log(queryStr)

        var url = 'http://localhost:3000/crud'
        url = url + "?" + queryStr

        fetch(url)
            .then(response => { 
                return response.json() })
            .then(items => this.setState({ items: items, totalItems: items[0].total, activeItem: items[0]}))
            .catch(err => console.log(err))
    }


    handleItemClick = (e, { index }) => this.setState({ activeIndex: index, activeItem: this.state.items[index] })

    handleItemsPerPage = (event, data) => this.setState({ pageSize: data.value }, () => {
        this.getJobs(1, this.state.pageSize)
    })

    handlePageChange = (e, { activePage }) => this.setState({ page: activePage }, () => this.getJobs(this.state.page, this.state.pageSize))

    renderMenuItems = () => {
        const { items } = this.state

        var tags = []
        for (let i = 0; i < items.length; i++) {
            tags.push(<Menu.Item index={i} active={this.state.activeIndex === i} onClick={this.handleItemClick} >
                <Header as='h3' color='olive' style={{ marginBottom: '0', marginTop: '10px' }}>{items[i].job_title}</Header>
                <p>{items[i].location_name}</p>
                <Divider style={{ width: '20%', marginBottom: '0' }} />
                <p style={{ marginBottom: '20px' }}>{items[i].posted.split("T")[0]}</p>
            </Menu.Item>)
        }
        return tags;
    }


    render() {

        let pages = Math.ceil(this.state.totalItems / this.state.pageSize)
        

        const itemsPerPage = [
            { key: 5, value: 5, text: '5 per page' },
            { key: 10, value: 10, text: '10 per page' }
        ]

        return (
            <div>
                <Grid >
                    <Grid.Column width={6} style={{ marginLeft: '5px' }}>
                        <Menu fluid vertical tabular secondary color='black' inverted style={{ minHeight: '1070px' }}>
                            {this.renderMenuItems()}
                            <Menu.Item as='dropdown' style={{ marginTop: '250px' }}>
                                <Dropdown selection defaultValue={5} options={itemsPerPage} onChange={this.handleItemsPerPage} style={{ width: '10%' }} />
                                <Pagination boundaryRange={0}
                                    defaultActivePage={1}
                                    ellipsisItem={null}
                                    firstItem={null}
                                    lastItem={null}
                                    siblingRange={1}
                                    totalPages={pages !== 0 ? pages : 1}
                                    color='grey' inverted
                                    activePage={this.state.page}
                                    onPageChange={this.handlePageChange}
                                    style={{ marginLeft: '10px' }} />
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Segment style={{ border: '0', marginTop: '10px', minHeight: '1070px' }}>
                            <JobDetails activeJob={this.state.activeItem} />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>

        )
    }
}

export default JobPage