import React, { Component } from 'react'
import { Segment, Image } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel';

class TrainContentCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs={false} size='medium' infiniteLoop autoPlay>
                <div>
                    <Image src='ibmwbs.png' size='huge' centered />
                    <Segment size='huge' inverted>
                        XLYSI provides end-to-end SOA integration and consulting services specializing in IBM Websphere Technology.
                        Our services related to Websphere Portal include planning and designing a Websphere Portal Environment, 
                        Administartion, Authorization and Rebranding.
                    </Segment>
                </div>
                <div>
                    <Image src='oracleas.png' size='huge' centered />
                </div>
                <div>
                    <Image src='lr.png' size='huge' centered />
                </div>
                <div>
                    <Image src='sharepoint-kreisgrafik-removebg-preview.png' size='huge' centered />
                </div>
                <div>
                    <Image src='snw-removebg-preview.png' size='huge' centered />
                </div>
            </Carousel>

        )
    }
}

export default TrainContentCarousel;