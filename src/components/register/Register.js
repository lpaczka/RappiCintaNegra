import React from 'react'
import gql from "graphql-tag";
import { Mutation } from 'react-apollo';
import SignUpForm from './form';
import { Redirect } from 'react-router-dom';
import './register.css'

const SINGUP = gql`
    mutation Register(
        $first_name:String!,
        $last_name:String!,
        $email:String!,
        $password:String!, 
        $profile_image: Upload) {
            signup(data: {
                first_name: $first_name
                last_name: $last_name
                email: $email
                password: $password
                profile_image: $profile_image
            }) {
                token
        }
    }
`;

class Register extends React.Component {

    handleSignUp = (userData, signup) => {
        console.log('DATA--', userData);
        signup({ variables: { ...userData } })
    }

    render() {
        return (
            <Mutation mutation={SINGUP}>
                {
                    (signup, { data, error }) => {
                        if (data) {
                            localStorage.setItem("appToken", data.signup.token);
                            return <Redirect to='/' />
                        }
                        if (error) {
                            console.log(error)
                            return (
                                <h1>Error</h1>
                            )
                        }
                        return (
                            <section className='signup'>
                                <SignUpForm
                                    handleSignUp={(userData) =>
                                        this.handleSignUp(
                                            userData,
                                            signup)}
                                />
                            </section>
                        )
                    }
                }
            </Mutation>
        );
    }
}

export default Register;