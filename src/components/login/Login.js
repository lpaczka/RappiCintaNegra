import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Input } from '../../common/input';
import './login.css'
import mexico from '../../img/mexico.png'

const LOGIN = gql`
mutation LOGIN($email:String!, $password:String!){
    login(email:$email, password:$password){
        token
    }
}
`
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleInput = e => {
        const { id, value } = e.target
        this.setState({
            [id]: value
        })
    }

    handleForm = (e, login) => {
        e.preventDefault();
        login({ variables: { ...this.state } });
    }
    catchData = data => {
        console.log(data);
        const { token } = data.login;
        localStorage.setItem("appToken", token)
        this.props.history.push('/')
    }
    catchError = err => {
        console.log(err);
    }

    render() {
        return (
            <Mutation mutation={LOGIN}>
                {
                    (login, { data, err, loading }) => {
                        if (data) this.catchData(data)
                        if (err) this.catchError(err)
                        return (
                            <div className="login-view">
                            <form className="form-login" onSubmit={e => this.handleForm(e, login)}>
                                <img className="img-login" src={mexico} alt='mexico'/>
                                <p className="p-1">Bienvenid@ a Rappi</p>
                                <p className="p-2">Toda tu ciudad en minutos</p>
                                <p className="p-3">Ingresa con</p>
                                        <Input
                                            type="email"
                                            id="email"
                                            name="Email"
                                            value={this.state.email}
                                            setInput={this.handleInput}
                                            required
                                            placeholder="Correo"
                                            className="input-1 input-login"
                                        />
                                        <Input
                                            type="password"
                                            id="password"
                                            name="Password"
                                            value={this.state.password}
                                            setInput={this.handleInput}
                                            required
                                            placeholder="Contraseña"
                                            className="input-2 input-login"
                                        />
                                    <button type="submit" className="btn btn-outline-">Ingresa con tu correo</button>
                            </form>
                            </div>
                        );
                    }
                }
            </Mutation>
        );
    }
}

export default Login;