import React, { Component } from "react"
import './App.css';
import Header from "./components /headerComponent/hearder"
import TextComponent from "./components /textComponent/textComponent"
import Input from "./components /formularioComponent/INPUTS/input"
import Button from "./components /formularioComponent/buttons/buttons.jsx"
import Register from "./components /telaRegister/register"
import Login from "./components /telalogin/login"
import Routes from "./components /Router"
import {BrowserRouter} from "react-router-dom"

export default class myapp extends Component {


  constructor(props) {
    super(props)
    this.state = {
     
    }


  }


  SelectFormArea() {
      



  }


  render() {

    return (
      <BrowserRouter>
      <div>
        < Header />
        <div className="container" >
          < TextComponent />
          <Routes />
        </div>

      </div>
      </BrowserRouter>

    )

  }

}


