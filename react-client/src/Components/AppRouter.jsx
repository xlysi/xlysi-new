import React, { Component } from 'react';
import {Router, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import HeaderImage from './HeaderImage';
import Footer from './Footer'
import ServicesPage from './ServicesPage'
import Careers from './Careers';
import { connect } from 'react-redux';
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import { createBrowserHistory } from 'history'
import Profile from './Profile'


export const history = createBrowserHistory()

const AppRouter = () =>  {


    return (
        <Router history={history}>
          <div class='pusher'>
            <div>
              <HeaderImage />
            </div>
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="services" path="/services" component={ServicesPage} />
            <Route name="careers" path="/careers" component={Careers} />
            <Route name="login" path="/login" component={LoginPage} />
            <Route name="register" path="/register" component={RegisterPage} />
            <Route path="/profile" component={Profile} />
            <Footer />
          </div>
        </Router>
    )
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AppRouter);