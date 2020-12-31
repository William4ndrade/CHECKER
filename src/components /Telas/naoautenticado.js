import React, { Component } from "react"
import Header from "../headerComponent/hearder"
import TextComponent from "../textComponent/textComponent"
import Login from "../telalogin/login"
import Register from "../telaRegister/register"
import { Context } from "../../providers/basedataProvider"


export default class myapp extends Component {


  constructor(props) {
    super(props)
    this.state = {
       path: "/"
     
    }

  }

  changePath(path){
    this.setState({
      path: path
    })

  }



  

  


  render() {
       
        return (
          <div>
            < Header />
            <div className="container" >
              < TextComponent />
              {this.state.path === "/" ? <Login path={e => this.changePath(e)} /> : <Register path={e => this.changePath(e)} />}  
            </div>
          </div>
        )
      }
    
  }




