import "@babel/polyfill";
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import clientGraphql from './Graphql';
import routes from './config/routes';
import { Navbar as NavbarComponent } from './common/navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:1
     }
  }

  idProduct = e => {
    // let joined = this.state.product.concat(e.target.value);
    // this.setState({
    //     product: joined
    // })
    console.log(e.target.value)
  }

  render() {
    return (
      <ApolloProvider client={clientGraphql}>
        <Router>
          <React.Fragment>
            <NavbarComponent/>
            <Switch basket={this.idProduct}>
              { routes }
            </Switch>
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;