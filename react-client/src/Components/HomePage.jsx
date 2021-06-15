import React, { Component } from 'react';
import TrainContentCarousel from './TrainContentCarousel';
import TrainStackHome from './TrainStackHome';
import Customers from './Customers';

class HomePage extends Component {
  render() {
    return (
      <div>
        <TrainStackHome />
        <Customers />
      </div>
    )
  }
}
export default HomePage;