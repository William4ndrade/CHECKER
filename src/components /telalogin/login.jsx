import React, { Component } from "react"
import Input from "../formularioComponent/INPUTS/input"
import Button from "../formularioComponent/buttons/buttons"
import {Link} from "react-router-dom"
export default class Register extends Component {

    render(){
        return(
            <div className="formAREA">
          <h1 className="form">Login</h1>
          <Input className="fa fa-home inputinformarea" placeholder="Email" type="Email" />
            <Input className="inputinformarea" placeholder="Senha" type="password" />
            <Button value="Login" />  
            <Link  className="loginclaimer" to="/">Faça seu registro por aqui.</Link>
          </div>




        )












    }
        





    



}