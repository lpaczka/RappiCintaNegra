import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Login} from '../components/login';
import isAuthenticated from '../isAuthenticated';
import {Home} from '../components/home'
import {Register} from '../components/register'
import {Stores} from '../components/stores'

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

export default [
    <Route exact path="/login" component={Login}/>,
    <Route exact path="/logout" component={Logout}/>,
    <Route exact path="/" component={Home}/>,
    <Route exact path="/signup" component={Register}/>,
    <PrivateRoute exact path="/store/:id" component={Stores}/>
]