import { event } from "jquery"
import React, { useContext, useState } from "react"
import Context from "../../providers/basedataProvider"
import "./MainComponent.css"



export default (props) => {

    const {data, set } = useContext(Context)
    const [input, setInput] = useState({
        title: false
    })


    const changeField = (e) => {
        setInput({
            title: e.target.value
        })
    }





    return(

        <div className="containerCriarlistas" >
            {input.title ? <span className="title" >{input.title}</span> : <span className="title" > Lista do <strong className="strongname">{data.username}</strong>  <i className="fa fa-sticky-note litlecard "></i>  </span>}
            <div className="inputs">
                
                <input onChange={e => changeField(e)} value={input.title ? input.title : ""} placeholder="Título" maxLength="30" className="mybitches" type="text" name="title" id="title"/>
                
                
                



            </div>
            




        </div>

    )



}
