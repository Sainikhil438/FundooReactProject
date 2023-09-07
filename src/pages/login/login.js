import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../signup/signup.js'
import './login.css'
import img1 from '../../images/fundoo1.jpeg'
import { signIn } from '../../Services/Userservices.js';

const LoginForm = () => {

    // const [user, setUser] = useState({
    //     email: "", password: ""
    // });

    // let name,value;

    // const handleInputs = (e) =>
    // {
    //     console.log(e);
    //     name = e.target.name;
    //     value= e.target.value;
        
    //     setUser({ ...user, [name]:value});
    // }

    // const handleClick =() =>
    // {
    //     console.log(user);
    // }

    

    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const [data, setData] = useState({ email: "", password: "" });
    const [errorObj, setErrorObj] = useState({ emailError: false, emailHelper: "", passwordError: false, passwordHelper: "", })
    const takeEmail = (event) => {
         setData((prev) => ({ ...prev, email: event.target.value })); 
    };
    const takepass = (event) => {
        setData((prev) => ({ ...prev, password: event.target.value }));
    };
    const submit = async () => {
        let emailTest = emailRegex.test(data.email); let passwordTest = passwordRegex.test(data.password);
        if (emailTest === false) {
            setErrorObj((prevState) => ({ ...prevState, emailError: true, emailHelper: "Enter correct Email", }));
        } else {
            setErrorObj((prevState) => ({ ...prevState, emailError: false, emailHelper: "", }));
        } if (passwordTest === false) {
            setErrorObj((prevState) => ({ ...prevState, passwordError: true, passwordHelper: "Enter correct Password", }));
        } else {
            setErrorObj((prevState) => ({ ...prevState, passwordError: false, passwordHelper: "", }));
        } console.log(data);

        if (emailTest === passwordTest === true) {
            let response = await signIn(data);
            console.log(response);
            localStorage.setItem("token", response.data.data);
        }
    }

    return (
        <div className="login-outer">
            <div className="login-form">
                <img src={img1} alt="fundoo1" />
                <h2>Sign in</h2>
                <h4>with your Email Account</h4>
                <div className="one"><TextField type="email" name="email" id="email1" label="Email" variant="outlined" autoComplete="off" 
                //value={user.email}
                //onChange={handleInputs}
                placeholder="Your Email"
                size="large" error={errorObj.emailError} helperText={errorObj.emailHelper} onChange={takeEmail}
                /></div>
                <div className="two"><TextField type="password" name="password" id="password1" label="Password" variant="outlined" 
                //value={user.password}
                //onChange={handleInputs}
                placeholder="Your Password"
                size="large" error={errorObj.passwordError} helperText={errorObj.passwordHelper} onChange={takepass}
                /></div>
                <div className="forpassword"><a className="pword">Forgot password</a></div>
                <div className="three">
                    <div><a className="create" href="/Signup">Create account</a></div>
                    <button className="button" type="submit" onClick={submit}>Sign in</button></div>

            </div>
        </div>
    )
}
export default LoginForm;