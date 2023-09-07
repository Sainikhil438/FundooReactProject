import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from "../pages/signup/signup";
import LoginForm from "../pages/login/login";
import Dashboard from "../Components/Dashboard/Dashboard";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<AuthRoute><LoginForm /></AuthRoute>} />
                    <Route path={"/Signup"} element={<AuthRoute><RegistrationForm /></AuthRoute>} />
                    <Route path={"/Dashboard"} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router;