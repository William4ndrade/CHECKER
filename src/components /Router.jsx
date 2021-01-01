import React ,{ useContext} from "react"
import {Switch, Redirect, Route, BrowserRouter } from "react-router-dom"
import  Context from "../providers/basedataProvider"

// components 

import TelaNãoAutenticado from "./Telas/naoautenticado"
import TelaAutenticado from "./Telas/autenticado"


//--------------------------------------------


const Routes =  props => {
    
    const Getdata = () => {
        const {data} = useContext(Context)
        return data.authenticaded
    }

   
   
    return(
        
        <BrowserRouter>
            <Switch>
                 <Route path="/" exact > { Getdata() ? <TelaAutenticado /> : <TelaNãoAutenticado /> }</Route> 
                 <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
      
    )

}

export default Routes