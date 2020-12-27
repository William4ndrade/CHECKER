import React, { Component } from "react"
import { Link } from "react-router-dom"
import Feedback from "../FeedbackArea/feedback"
import config from "../../Config.json"

export default class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Users: {
        Email: "",
        Senha: ""
      },

      feedback: []
    }
  }

  changeField(event) {
    const user = { ...this.state }
    user.Users[event.target.name] = event.target.value
    this.setState(user)
  }

  changeFeedback(text, classes) {
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


  checkForm() {
    const { Users } = this.state
    const emailcheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (Users.Email && Users.Senha && emailcheck.test(Users.Email)) {
        return true
    } else {
        this.changeFeedback("Dados incorretos, por favor revise", "feedbackred")
        return false
    }
}

  APILoginRoute(){
      if(this.checkForm()){
        fetch(`${config.baseurl}/LoginRoute`, {
           method: "GET", 
           credentials: "include",
           headers: {
              USC: `${btoa(this.state.Users.Email)}:${btoa(this.state.Users.Senha)}.willys`
           }
        }).then(async e => {
          return {
            status: e.status, 
            json: await e.json(),
          }

        })
          .then(e => {
              if(e.status === 202){
                  this.changeFeedback("Login executado com sucesso", "feedbackgreen")
              }else{
                if(e.status === 401){
                  this.changeFeedback(e.json.statusmensage, "feedbackred")
                }

              }








            
          })













      }





  }

  render() {


      return (
            <div className="formAREAL">
              <Feedback value={this.state.feedback.length > 0 ? this.state.feedback[0].text : ""} classes={this.state.feedback.length > 0 ? this.state.feedback[0].classes : ""}  /> 
              <h1 className="form">Login</h1>
              <input name="Email" value={this.state.Users.Email} onChange={e => this.changeField(e)} className="mybitches" placeholder="Email" type="Email" ></input>
              <input name="Senha" value={this.state.Users.Senha} onChange={e => this.changeField(e)} className="mybitches" placeholder="Senha" type="password" ></input>
              <button onClick={e => this.APILoginRoute()} className="buttoncorno" > Login </button>
              <Link className="loginclaimer" to="Register">Faça seu registro por aqui.</Link>
            </div>
          )
    

    
    












  }










}