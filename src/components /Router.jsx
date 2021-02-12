import React ,{ useContext} from "react"
import {Switch, Redirect, Route, BrowserRouter } from "react-router-dom"
import  Context from "../providers/basedataProvider"

// components 

import TelaNãoAutenticado from "./Telas/naoautenticado"
import TelaAutenticado from "./Telas/autenticado.jsx"
import AddList from "../components /Telas/autenticadoNewlist"
import Onesinglelist from "../components /OneListComponent/OneListComponent"
import Header from  "../components /headerComponent/hearder"
//--------------------------------------------


const Routes =  props => {

    const {data} = useContext(Context)

    const Getdata = () => {
        const {data} = useContext(Context)
        return data.authenticaded
    }

   
   
    return(
        
        <BrowserRouter>
            <Switch>
                 <Route path="/" exact > { Getdata() ? <TelaAutenticado /> : <TelaNãoAutenticado /> }</Route>
                 { Getdata() ? <Route path="/newList" exact >  <AddList/>   </Route>  : <Redirect to="/" />}
                 {Getdata() && data.idsinglelist ?   <Route exact path={"/" + data.idsinglelist}> <> < Header nome={data.username} /> <Onesinglelist/> </> </Route>  : <Redirect to="/"/>}
               
                  
            </Switch>
        </BrowserRouter>
      
    )

}

export default Routes