import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signup.css'
import '../login/login.js'
import img1 from '../../images/fundoo1.jpeg'
import img2 from '../../images/addimage1.png'
import { Checkbox } from '@mui/material';

const RegisterationForm = () => {

    const [user, setUser] = useState({
        firstname: "", lastname: "", email: "", password: "", cpassword: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const handleClick = () => {
        console.log(user);
    }

    return (
        <div className="form-container1">

            <div className="form-container2">
                <div className="image1">
                    <img src={img1} alt="fundoo1" />
                </div>
                <h2>Create your Fundoo Note Account</h2>
                <div className="name1">
                    <div className="style"><TextField name="firstname" id="firstname" label="First name" variant="outlined" autoComplete="off"
                    value={user.firstname}
                    onChange={handleInputs}
                     placeholder="Your FirstName"
                    /></div>
                    <div className="style"><TextField name="lastname" id="lastname" label="Last name" variant="outlined" autoComplete="off"
                    value={user.lastname}
                    onChange={handleInputs}
                    placeholder="Your LaststName"
                    /></div>
                </div>
                <div className="emstyle">
                    <div><TextField className="emailClass" name="email" id="email" label="Email" type="email" variant="outlined" autoComplete="off"
                        value={user.email}
                        onChange={handleInputs}
                        placeholder="Your Email"
                    /></div></div>
                <div className="name2">
                    <div className="style"><TextField type="password" name="password" id="password" label="Password" variant="outlined"
                     value={user.password}
                      onChange={handleInputs}
                      placeholder="Your Password"  
                    /></div>
                    <div className="style"><TextField type="password" name="cpassword" id="cpassword" label="Confirm Password" variant="outlined"
                     value={user.cpassword}
                     onChange={handleInputs}
                     placeholder="Your ConfirmPassword"   
                    /></div>
                </div>
                <div className="cboxclass">
                    <div><p>Password should be minimum of 8 characters</p></div>
                    <span>
                        <Checkbox id="cbox2" label="ShowPassword" />Show Password
                    </span>
                </div>

                <div className="links">
                    <a className="btn1" href="login.js">login if you already have account</a>
                    <button className="btn2" type="submit" onClick={handleClick}>Register</button>
                </div>

            </div>

            <div className="image-container">
                <img className="image2" src={img2} alt="image" />
            </div>

        </div>
    )
}
export default RegisterationForm