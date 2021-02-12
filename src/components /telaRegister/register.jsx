import React, { Component} from "react"
import { Link } from "react-router-dom"
import Feedback from "../FeedbackArea/feedback"
import config from "../../Config.json"
import "../formularioComponent/INPUTS/input"
import "../formularioComponent/buttons/buttons"
import  Context  from "../../providers/basedataProvider"





export default class Register extends Component {


    constructor(props) {
        super(props)
        this.state = {
            Users: {
                Email: "",
                Nome: "",
                Senha: "",
                confirmarsenha: ""
            },

            feedback: []
        }
    }

    changeField(event) {
        const user = { ...this.state }
        user.Users[event.target.name] = event.target.value
        this.setState(user)
    }


    changeFeedback(text, classes){
        this.setState({
            feedback: [
                {
                    classes: classes,
                    text: text

                }
            ]
        })

        setTimeout(() => this.setState({
            feedback: []
        }), 2000)
    }

    BeAuthenticaded(username){
        const { set } = this.context
        set({
          authenticaded: true,
          username,
        })
    }



    checkForm() {
        const { Users } = this.state
        const emailcheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (Users.Email && Users.Senha && Users.confirmarsenha && Users.Senha.length >= 6 && Users.Senha === Users.confirmarsenha && emailcheck.test(Users.Email) && Users.Nome.length <= 12) {
            return true
        } else {
            if(Users.Nome.length > 12){
                this.changeFeedback("O nome deve possuir no máximo 12 caracteres", "feedbackred")
                return false
            }else if(Users.Senha.length < 6){
                this.changeFeedback("A senha deve possuir no minimo 6 caracteres", "feedbackred")
                return false

            }else if(Users.Senha !== Users.confirmarsenha){
                this.changeFeedback("As senhas não são correspondentes", "feedbackred")
                return false

            }else if(emailcheck.test(Users.Email)){
                this.changeFeedback("Email invalido", "feedbackred")
                return false
            }else{
                this.changeFeedback("Dados incorretos, por favor revise", "feedbackred")
                return false
            }
        }
    }

    APIPostFunction() {
        const BaseURL = config.baseurl
        if (this.checkForm()) {
            fetch(`${BaseURL}/RegisterRoute`, {
                method: "post",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Data: `${btoa(this.state.Users.Email)}:${btoa(this.state.Users.Senha)}:${btoa(this.state.Users.Nome)}.willys`

                })

            }).then(e => e.json())
            .then(e => {
                if(e.ok === true){
                    this.changeFeedback("Conta criada com sucesso", "feedbackgreen")
                    this.BeAuthenticaded(e.username)

                }else{
                    if(e.statusmensage === "Email aready exists"){
                        this.changeFeedback("E-mail em uso", "feedbackred")
                    }else{
                        this.changeFeedback("Aconteu um erro inesperado. Tente novamente!", "feedbackred")
                    }


                }




            })



        }



    }


    render() {    
            return (
                <div className="formAREA">
                     <Feedback value={this.state.feedback.length > 0 ? this.state.feedback[0].text : ""} classes={this.state.feedback.length > 0 ? this.state.feedback[0].classes : ""}  /> 
                    <h1 className="form">Criar minha conta</h1>
                    <input maxLength="12" name="Nome" value={this.state.Users.Nome} onChange={e => this.changeField(e)} className="mybitches" placeholder="Nome" type="text" ></input>
                    <input name="Email" value={this.state.Users.Email} onChange={e => this.changeField(e)} className="mybitches" placeholder="Email" type="Email" ></input>
                    <input name="Senha" value={this.state.Users.Senha} onChange={e => this.changeField(e)} className="mybitches" placeholder="Senha" type="password" ></input>
                    <input name="confirmarsenha" value={this.state.Users.confirmarsenha} onChange={e => this.changeField(e)} className="mybitches" placeholder="Confirmar senha" type="password" ></input>
                    <button onClick={e => this.APIPostFunction()} className="buttoncorno" > Registrar-se </button>
                    <Link  to="/" onClick={e => this.props.path("/")} className="loginclaimer" >Já é de casa? Clique aqui e faça login</Link>
                </div>
            )
        } 

}


Register.contextType = Context