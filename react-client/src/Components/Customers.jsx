import React, { Component } from 'react'
import { Segment, Image, Header, Grid } from 'semantic-ui-react'


class Customers extends Component {

    importAll(r) {
        return r.keys().map(r);
    }

    buildGrid(images){
        let gridArray = []
        let gridRow = []
        while(images[0]){
            for(let i=0; i<9; i++){
                if(images[0]){
                    gridRow.push(images.shift())
                }
            }

            gridArray.push(gridRow)
            gridRow = []
        }

        return gridArray.map((row,idx) => {
            return (
                <Grid.Row key={idx} style={{width:'800px'}}>
                    {
                        row.map(eqt => <Grid.Column>
                            <Image src={eqt} wrapped centered size='large'/>
                        </Grid.Column>)
                    }
                </Grid.Row>
            )
        })
    }


    render() {

        const images = this.importAll(require.context('../customers/', false, /\.(png|jpe?g|svg)$/));

        return (
            <Segment vertical padded style={{ minHeight: '550px', marginTop:'200px' }}>
                <Header as='h2' style={{ fontSize: '1.7em', marginTop: '1em' }} textAlign='center'>
                    Our Customers
                </Header>
                <Grid container columns={9} style={{marginTop:'50px'}} textAlign='center' relaxed>
                    {this.buildGrid(images)}
                </Grid>
            </Segment>
        )
    }
}

export default Customers;