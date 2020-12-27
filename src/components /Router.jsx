import React from "react"
import {Switch, Redirect, Route } from "react-router"

// components 

import Login from "./telalogin/login"
import Register from "./telaRegister/register"


//--------------------------------------------


export default props => {

    return(
    <Switch> 
        <Route exact path="/" > <Login />  </Route>
        <Route exact path="/Register" > <Register />  </Route>
        <Redirect from="*" to="/" />
    </Switch>
    )










}