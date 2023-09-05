import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../signup/signup.js'
import './login.css'
import img1 from '../../images/fundoo1.jpeg'

const LoginForm = () => {

    const [user, setUser] = useState({
        email: "", password: ""
    });

    let name,value;

    const handleInputs = (e) =>
    {
        console.log(e);
        name = e.target.name;
        value= e.target.value;
        
        setUser({ ...user, [name]:value});
    }

    const handleClick =() =>
    {
        console.log(user);
    }

    return (
        <div className="login-outer">
            <div className="login-form">
                <img src={img1} alt="fundoo1" />
                <h2>Sign in</h2>
                <h4>with your Email Account</h4>
                <div className="one"><TextField type="email" name="email" id="email1" label="Email" variant="outlined" autoComplete="off" 
                value={user.email}
                onChange={handleInputs}
                placeholder="Your Email"
                /></div>
                <div className="two"><TextField type="password" name="password" id="password1" label="Password" variant="outlined" 
                value={user.password}
                onChange={handleInputs}
                placeholder="Your Password"
                /></div>
                <div className="forpassword"><a className="pword">Forgot password</a></div>
                <div className="three">
                    <div><a className="create" href="singup.js">Create account</a></div>
                    <button className="button" type="submit" onClick={handleClick}>Sign in</button></div>

            </div>
        </div>
    )
}
export default LoginForm