import React from "react"
import {Switch, Redirect, Route } from "react-router"
import IsAuth from "./Auth/IsAuthenticaded"
// components 

import Login from "./telalogin/login"
import Register from "./telaRegister/register"


//--------------------------------------------


const PriviteRoute = (Component) => (

    <Route exact path="/me" render={async e => {
        await IsAuth() ? < Component /> : <Redirect to="/" />
    }} />  


)



const routes =  props => {



    return(
    <Switch> 
        <Route exact path="/" > <Login />  </Route>
        <Route exact path="/Register" > <Register />  </Route>
        <PriviteRoute Component={<h1>OI</h1>} />
        <Redirect from="*" to="/" />
    </Switch>
    )

}

export default routes