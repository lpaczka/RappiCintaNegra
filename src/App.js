import "@babel/polyfill";
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import clientGraphql from './Graphql';
import { Navbar as NavbarComponent } from './common/navbar';

import {Login} from './components/login';
import isAuthenticated from './isAuthenticated';
import {Home} from './components/home'
import {Register} from './components/register'
import {Stores} from './components/stores'



const Logout = () => {
  localStorage.removeItem('appToken');
  return <Redirect to="/login"/>
}

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={
      (props) => (
          isAuthenticated() 
          ? <Component {...props}/> 
          : <Redirect to="/login"/>
      )
  }>
  </Route>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:[]
     }
  }

  idProduct = e => {
    let joined = this.state.data.concat(e.target.value);
    this.setState({
      data: joined
    })
  }

  delete = e => {
    console.log(e.target)
    // let joined = this.state.data.splice(e.target);
    // this.setState({
    //   data: joined
    // })
  }

  render() {
    return (
      <ApolloProvider client={clientGraphql}>
        <Router>
          <React.Fragment>
            <NavbarComponent data={this.state.data} delete={this.delete}/>
            <Switch>
                <Route exact path="/login" component={Login}/>,
                <Route exact path="/logout" component={Logout}/>,
                <Route exact path="/" component={Home}/>,
                <Route exact path="/signup" component={Register}/>,
                <PrivateRoute exact path="/store/:id" component={(props) => <Stores {...props} basket={this.idProduct}/>}/>
            </Switch>
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;