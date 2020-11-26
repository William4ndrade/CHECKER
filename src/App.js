import React, { Component } from "react"
import './App.css';
import Header from "./components /headerComponent/hearder"
import TextComponent from "./components /textComponent/textComponent"
import Input from "./components /formularioComponent/INPUTS/input"
import Button from "./components /formularioComponent/buttons/buttons.jsx"

export default class myapp extends Component {


  render() {

    return (
      <div>
        < Header />
        <div className="container" >
          < TextComponent />
          <div className="formAREA"> 
              <h1 className="form">Criar minha conta</h1>
              <Input className="inputinformarea" placeholder="Email" type="Email" />
              <Input className="inputinformarea" placeholder="Senha" type="password" />
              <Input className="inputinformarea" placeholder="Confirmar Senha" type="password" />
              <Button value="Registre-se" />

              <div className="loginclaimer">Já é de casa? Clique aqui e faça login</div>
           </div>
        </div>
        

        


      </div>

    )

  }

}


