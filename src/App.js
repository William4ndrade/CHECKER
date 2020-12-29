import React, { Component } from "react"
import './App.css';
import Header from "./components /headerComponent/hearder"
import TextComponent from "./components /textComponent/textComponent"
import Routes from "./components /Router"
import {BrowserRouter} from "react-router-dom"
import IsAuth from "./components /Auth/IsAuthenticaded"

export default class myapp extends Component {


  constructor(props) {
    super(props)
    this.state = {
       auth: false
     
    }

  }

  turnLoggout(){
       IsAuth().then(e => {
         console.log(e)
      })
     
      
  }


  


  render() {
    this.turnLoggout()
    
      if(this.state.auth){
        return (
          <BrowserRouter>
          < Header />
          
          </BrowserRouter>


        )






      }else{
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

}


