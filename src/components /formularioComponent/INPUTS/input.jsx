import React, { Component } from "react"
import "./input.css"

export default class inputs extends Component {

    constructor(props){
        super(props)
    }


    render() {
      return (
         <input className="mybitches" placeholder={this.props.placeholder} type={this.props.type} ></input>        
        
      )
  
    }
  
  }
  