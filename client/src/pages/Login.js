import React, { useState } from 'react';

import Footer from '../components/footer';
import Navigation from '../components/navbar';

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        props.updateLoginStatus();
    }

    return (
        <>
            <Navigation />
            <div className="container">
                <div className="row login">
                    <div className="col-sm-12">
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <p>Enter a username</p>
                            <input type='text'
                                name='username'
                                onChange={handleChange}
                                className="form-control"
                            />
                            <br />
                            <p>Enter a password</p>
                            <input type='password'
                                name='password'
                                onChange={handleChange}
                                className="form-control"
                            />
                            <br />
                            <input type="submit" className="login__button" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
