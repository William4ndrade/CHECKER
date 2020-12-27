import React, { Component } from "react"
import './App.css';
import Header from "./components /headerComponent/hearder"
import TextComponent from "./components /textComponent/textComponent"
import Routes from "./components /Router"
import {BrowserRouter} from "react-router-dom"

export default class myapp extends Component {


  constructor(props) {
    super(props)
    this.state = {
     
    }


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


