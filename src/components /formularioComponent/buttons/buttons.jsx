import React, { Component } from "react"
import "./buttons.css"

export default class buttons extends Component {

    constructor(props){
        super(props)
    }


    render() {
      return (
         <button className="buttoncorno" > {this.props.value} </button>
        
      )
  
    }
  
  }