import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../signup/signup.js'
import './login.css'
import img1 from '../../images/fundoo1.jpeg'

const LoginForm = () => {
    return (
        <div className="login-outer">
            <div className="login-form">
                <img src={img1} alt="fundoo1" />
                <h2>Sign in</h2>
                <h4>with your Email Account</h4>
                <div className="one"><TextField type="email" name="email" id="email1" label="Email" variant="outlined" autoComplete="off" /></div>
                <div className="two"><TextField type="password" name="password" id="password1" label="Password" variant="outlined" /></div>
                <div className="forpassword"><a className="pword">Forgot password</a></div>
                <div className="three">
                    <div><a className="create" href="singup.js">Create account</a></div>
                    <button className="button" type="submit" >Sign in</button></div>

            </div>
        </div>
    )
}
export default LoginForm