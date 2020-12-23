import { post } from "jquery"
import React, { Component } from "react"
import {Link} from "react-router-dom"


export default class Register extends Component {


    constructor(props){
        super(props)
        this.state = {
            Users: {
                Email: "",
                Senha: "", 
                confirmarsenha: ""
            }
        }
    }

    changeField(event){
        const user = {...this.state}
        user.Users[event.target.name] = event.target.value
        this.setState(user)
    }

    checkForm(){
        const {Users} = this.state
        const emailcheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(Users.Email && Users.Senha && Users.confirmarsenha && Users.Senha >= 6 && Users.Senha === Users.confirmarsenha && emailcheck.test(Users.Email) ){
            return true
        }else{
            return false
        }
    }

    APIPostFunction(){
        const BaseURL = "http://localhost:8081"
        console.log(BaseURL)
        if(this.checkForm()){
            fetch(`${BaseURL}/RegisterRoute`, {
                method: "post", 
                headers: {
                    oi: "Ola"
                }, 
                body: {
                    Email: this.state.Users.Email,
                    Senha: this.state.Users.Senha,

                }
            }).then(e => e.json())





        }




    }


    render(){
        return(
            <div className="formAREA">
          <h1 className="form">Criar minha conta</h1>
          <input name="Email" value={this.state.Users.Email} onChange={e => this.changeField(e)} className="mybitches" placeholder="Email" type="Email" ></input>        
          <input name="Senha" value={this.state.Users.Senha} onChange={e => this.changeField(e)}className="mybitches" placeholder="Senha" type="password" ></input>        
          <input name="confirmarsenha" value={this.state.Users.confirmarsenha} onChange={e => this.changeField(e)} className="mybitches" placeholder="Confirmar senha" type="password" ></input>        
          <button onClick={e => this.APIPostFunction()} className="buttoncorno" > Registra-se </button> 
            <Link className="loginclaimer" to="Login">Já é de casa? Clique aqui e faça login</Link>
          </div>




        )












    }
        





    



}