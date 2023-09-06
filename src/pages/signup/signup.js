import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signup.css'
import '../login/login.js'
import img1 from '../../images/fundoo1.jpeg'
import img2 from '../../images/addimage1.png'
import { Checkbox } from '@mui/material';
import { signUp } from '../../Services/Userservices';


const RegistrationForm = () => {
    // const [user, setUser] = useState({
    //     firstname: "", lastname: "", email: "", password: "", cpassword: ""
    // });

    // let name, value;

    // const handleInputs = (e) => {
    //     console.log(e);
    //     name = e.target.name;
    //     value = e.target.value;

    //     setUser({ ...user, [name]: value });
    // }

    // const handleClick = () => {
    //     console.log(user);
    // }

    //-----------------------------------------------------------------------
    const firstnameRegex = /^[a-zA-Z ]{2,30}$/;
    const lastnameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const confirmpasswordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const [data, setData] = useState({ firstname: "", lastname: "", email: "", password: "", confirmpassword: "" });
    const [errorObj, setErrorObj] = useState({ firstnameError: false, firstnameHelper: "", lastnameError: false, firstnameHelper: "", emailError: false, emailHelper: "", passwordError: false, passwordHelper: "", confirmpasswordError: false, confirmpasswordHelper: "", })
    const takeFirstname = (event) => {
        setData((prev) => ({ ...prev, firstname: event.target.value }));
    };
    const takeLastname = (event) => {
        setData((prev) => ({ ...prev, lastname: event.target.value }));
    };
    const takeEmail = (event) => {
        setData((prev) => ({ ...prev, email: event.target.value }));
    };
    const takepass = (event) => {
        setData((prev) => ({ ...prev, password: event.target.value }));
    };
    const takeConfirmpassword = (event) => {
        setData((prev) => ({ ...prev, confirmpassword: event.target.value }));
    };
    const submit = async () => {
        let firstnameTest = firstnameRegex.test(data.firstname);
        let lastnameTest = lastnameRegex.test(data.lastname);
        let emailTest = emailRegex.test(data.email);
        let passwordTest = passwordRegex.test(data.password);
        let confirmpasswordTest = confirmpasswordRegex.test(data.confirmpassword);
        if (firstnameTest === false) {
            setErrorObj((prevState) => ({ ...prevState, firstnameError: true, firstnameHelper: "Enter correct FirstName", }));
        } else {
            setErrorObj((prevState) => ({ ...prevState, firstnameError: false, firstnameHelper: "", }));
        }
        if (lastnameTest === false) {
            setErrorObj((prevState) => ({ ...prevState, lastnameError: true, lastnameHelper: "Enter correct LastName", }));
        } else {
            setErrorObj((prevState) => ({ ...prevState, lastnameError: false, lastnameHelper: "", }));
        }
        if (emailTest === false) {
            setErrorObj((prevState) => ({ ...prevState, emailError: true, emailHelper: "Enter correct Email", }));
        } else {
            setErrorObj((prevState) => ({ ...prevState, emailError: false, emailHelper: "", }));
        } if (passwordTest === false) {
            setErrorObj((prevState) => ({ ...prevState, passwordError: true, passwordHelper: "Enter correct Password", }));
        } else {
            setErrorObj((prevState) => ({ ...prevState, passwordError: false, passwordHelper: "", }));
        } if (confirmpasswordTest === false) {
            setErrorObj((prevState) => ({ ...prevState, confirmpasswordError: true, confirmpasswordHelper: "Enter correct Confirm Password", }));
        } else {
            setErrorObj((prevState) => ({ ...prevState, confirmpasswordError: false, confirmpasswordHelper: "", }));
        } console.log(data);

        if (firstnameTest === lastnameTest === emailTest === passwordTest === true) {
            let response = await signUp(data);
            console.log(response);
            localStorage.setItem("token", response.data.data.userID);
        }


    }
    //-----------------------------------------------------------------------------------
    return (
        <div className="form-container1">

            <div className="form-container2">
                <div className="image1">
                    <img src={img1} alt="fundoo1" />
                </div>
                <h2>Create your Fundoo Note Account</h2>
                <div className="name1">
                    <div className="style">
                        <TextField name="firstname"
                            id="firstname"
                            label="First name"
                            variant="outlined"
                            autoComplete="off"
                            //value={user.firstname}
                            //onChange={handleInputs}
                            placeholder="Your FirstName"
                            size="large"
                            error={errorObj.firstnameError}
                            helperText={errorObj.firstnameHelper}
                            onChange={takeFirstname}
                        /></div>
                    <div className="style">
                        <TextField name="lastname"
                            id="lastname"
                            label="Last name"
                            variant="outlined"
                            autoComplete="off"
                            //value={user.lastname}
                            //onChange={handleInputs}
                            placeholder="Your LaststName"
                            size="large"
                            error={errorObj.lastnameError}
                            helperText={errorObj.lastnameHelper}
                            onChange={takeLastname}
                        /></div>
                </div>
                <div className="emstyle">
                    <div><TextField className="emailClass" name="email" id="email" label="Email" type="email" variant="outlined" autoComplete="off"
                        //value={user.email}
                        //onChange={handleInputs}
                        placeholder="Your Email"
                        size="large" error={errorObj.emailError} helperText={errorObj.emailHelper} onChange={takeEmail}
                    /></div></div>
                <div className="name2">
                    <div className="style"><TextField type="password" name="password" id="password" label="Password" variant="outlined"
                        // value={user.password}
                        // onChange={handleInputs}
                        placeholder="Your Password"
                        size="large" error={errorObj.passwordError} helperText={errorObj.passwordHelper} onChange={takepass}
                    /></div>
                    <div className="style"><TextField type="password" name="cpassword" id="cpassword" label="Confirm Password" variant="outlined"
                        //value={user.cpassword}
                        //onChange={handleInputs}
                        placeholder="Your ConfirmPassword"
                        size="large" error={errorObj.confirmpasswordError} helperText={errorObj.confirmpasswordHelper} onChange={takeConfirmpassword}
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
                    <button className="btn2" type="submit" onClick={submit}>Register</button>
                </div>

            </div>

            <div className="image-container">
                <img className="image2" src={img2} alt="image" />
            </div>

        </div>
    )
}
export default RegistrationForm