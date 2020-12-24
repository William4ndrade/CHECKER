import React, { Component } from "react"
import { Link } from "react-router-dom"
import Feedback from "../FeedbackArea/feedback"

export default class Register extends Component {


    constructor(props) {
        super(props)
        this.state = {
            Users: {
                Email: "",
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

    checkForm() {
        const { Users } = this.state
        const emailcheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (Users.Email && Users.Senha && Users.confirmarsenha && Users.Senha >= 6 && Users.Senha === Users.confirmarsenha && emailcheck.test(Users.Email)) {
            return true
        } else {
            this.setState({
                feedback: [
                    {
                        classes: "feedbackred",
                        text: "Dados incorretos, revise!"

                    }
                ]
            })

            setTimeout(() => this.setState({
                feedback: []
            }), 2000)

            return false
        }
    }

    APIPostFunction() {
        const BaseURL = "http://localhost:8081"
        if (this.checkForm()) {
            fetch(`${BaseURL}/RegisterRoute`, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Data: `${btoa(this.state.Users.Email)}:${btoa(this.state.Users.Senha)}.willys`

                })

            }).then(e => e.json())
            .then(e => {
                if(e.ok === true){
                    this.setState({
                        feedback: [{
                            classes: "feedbackgreen",
                            text: "Conta criada com sucesso"
                        }]
                    })


                }




            })



        }



    }


    render() {

        if (this.state.feedback.length === 0) {
            return (
                <div className="formAREA">
                    <h1 className="form">Criar minha conta</h1>
                    <input name="Email" value={this.state.Users.Email} onChange={e => this.changeField(e)} className="mybitches" placeholder="Email" type="Email" ></input>
                    <input name="Senha" value={this.state.Users.Senha} onChange={e => this.changeField(e)} className="mybitches" placeholder="Senha" type="password" ></input>
                    <input name="confirmarsenha" value={this.state.Users.confirmarsenha} onChange={e => this.changeField(e)} className="mybitches" placeholder="Confirmar senha" type="password" ></input>
                    <button onClick={e => this.APIPostFunction()} className="buttoncorno" > Registra-se </button>
                    <Link className="loginclaimer" to="Login">Já é de casa? Clique aqui e faça login</Link>

                </div>
            )
        } else {
            return (
                <div className="formAREA">
                    <Feedback value={this.state.feedback[0].text} classes={this.state.feedback[0].classes} />
                    <h1 className="form">Criar minha conta</h1>
                    <input name="Email" value={this.state.Users.Email} onChange={e => this.changeField(e)} className="mybitches" placeholder="Email" type="Email" ></input>
                    <input name="Senha" value={this.state.Users.Senha} onChange={e => this.changeField(e)} className="mybitches" placeholder="Senha" type="password" ></input>
                    <input name="confirmarsenha" value={this.state.Users.confirmarsenha} onChange={e => this.changeField(e)} className="mybitches" placeholder="Confirmar senha" type="password" ></input>
                    <button onClick={e => this.APIPostFunction()} className="buttoncorno" > Registra-se </button>
                    <Link className="loginclaimer" to="Login">Já é de casa? Clique aqui e faça login</Link>

                </div>
            )






        }


























    }










}