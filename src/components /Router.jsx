import React from "react"
import {Switch, Redirect, Route } from "react-router"

// components 

import Login from "./telalogin/login"
import Register from "./telaRegister/register"


//--------------------------------------------


export default props => {

    return(
    <Switch> 
        <Route exact path="/" > <Register />  </Route>
        <Route exact path="/Login" > <Login />  </Route>
        <Redirect from="*" to="/" />
    </Switch>
    )










}