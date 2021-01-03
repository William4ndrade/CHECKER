import React, { useContext, useState } from "react"
import Context from "../../providers/basedataProvider"
import "./MainComponent.css"
import Feedback from "../FeedbackAuthenticaded/FeedbackAuthenticaded"
import BaseUrl from "../../Config.json"


export default (props) => {

    const { data, set } = useContext(Context)
    const [feedback, setFeedback] = useState({
        active: false, 
        color: null, 
        mensage: null
    })
    const [title, setTitle] = useState({
        value: false
    })
    const [input, setInput] = useState({
        inputData: [

        ],
        item: [
            <div className="itemarea" >
                <i id="meudeusvai" class="fas fa-align-left"></i>
                <input onChange={e => ControlItemInputs(e)} placeholder="item" maxLength="250" type="text" className="inputitem" name={0} id="item" />
            </div>,
            <div className="itemarea" >
                <i id="meudeusvai" class="fas fa-align-left"></i>
                <input onChange={e => ControlItemInputs(e)} placeholder="item" maxLength="250" type="text" className="inputitem" name={1} id="item" />
            </div>,
            <div className="itemarea" >
                <i id="meudeusvai" class="fas fa-align-left"></i>
                <input onChange={e => ControlItemInputs(e)} placeholder="item" maxLength="250" type="text" className="inputitem" name={2} id="item" />
            </div>

        ]





    })


    const changeFieldTitle = (e) => {
        const ola = { ...title }
        ola.value = e.target.value
        setTitle(ola)


    }

    const ControlItemInputs = (e) => {
        const InputName = e.target.name
        const arrayInputdata = { ...input }
        arrayInputdata.inputData[InputName] = {
            value: e.target.value,
            check: false,
            index: InputName
        }

        if (arrayInputdata.inputData.length === arrayInputdata.item.length) {
            arrayInputdata.item.push(
                <div className="itemarea" >
                    <i id="meudeusvai" class="fas fa-align-left"></i>
                    <input onChange={e => ControlItemInputs(e)} placeholder="item" maxLength="250" type="text" className="inputitem" name={arrayInputdata.item.length} id="item" />
                </div>
            )

            
        }

         const withContent = arrayInputdata.inputData.filter(e => {
             if(e.value.replace("^\\s+", "") === ""){
                 return e
             }
         })

         withContent.forEach(e => {
            const notfalse = arrayInputdata.item.filter(e => e != false) 
            if(notfalse.length > 3){
                 arrayInputdata.item[e.index] = false
            }    

          })
        


        setInput(arrayInputdata)

        const heightPage = document.body.scrollHeight;
        window.scrollTo(0 , heightPage);

    }

    const setFeedbackfunction = (color, value) => {
        const [good, bad] = ["rgb(68, 158, 68)", "rgb(179, 11, 11)"]
        setFeedback({
            active: true,
            color: color === 1 ? good : bad,
            mensage: value
        })

        setTimeout(() => {
            setFeedback({
                active: false,
                color: null,
                mensage: null
            })

        }, 2000)

        
        

    }

    const ValidationForm = () => {
        const Data = input.inputData.filter(e => e.value.trim()).map(e => e.value.replace(/( )+/g, ' '))
        if(Data.length > 0){
            let FinalDATA = ""
            Data.forEach((e,i) => {
                if(e.length > 250){
                    setFeedbackfunction(0, `O ${i} possivel mais caracteres que o permitido. ${e.length}/250`)
                    return false
                }else{
                   const finalData =  Data.map(e => {
                        return {
                            value: e,
                            checked: false
                        }
                    })
                    
                    FinalDATA = finalData

                }
            })

            return FinalDATA
            
        }else{
            setFeedbackfunction(0, "Preencha os itens")
            return false

        }

    }

    const ApiComunication = () => {
        const ItensContent = ValidationForm()
        console.log(ItensContent)
        if(ItensContent != false){
            if(title.value){
                fetch(`${BaseUrl.baseurl}/newList`, {
                    credentials: "include",
                    method: "post", 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        List: {
                            title: title.value, 
                            itens: ItensContent
                        }
                    })
                }).then(e => 1)

            }else{
                setFeedbackfunction(0, "Coleque um titulo na sua lista")
            }
            
        }else{
            setFeedbackfunction(0, "Escreva algo nos itens")
        }






    }


    return (

        <div className="containerCriarlistas" >
            {feedback.active ?  <Feedback color={feedback.color} value={feedback.mensage} /> : ""}
            {title.value ? <span className="title" >{title.value}</span> : <span className="title" > Lista <strong className="strongname">{data.username}</strong>  <i className="fa fa-sticky-note litlecard "></i>  </span>}
            <div className="inputs">
                <div className="changetitle" >
                    <input onChange={e => changeFieldTitle(e)} placeholder="Título" maxLength="30" className="mybitches" type="text" name="title" id="title" />
                </div>
                <h3 className="listtitle" > <i style={{ fontSize: "24px", color: "white" }} class="fas fa-list-ol"></i> Escreva sua Lista:</h3>
                <div className="inputsitens">
                    {input.item}
                </div>
                <button onClick={ApiComunication} className="buttoncorno" >Salvar</button>
            









            </div>





        </div>

    )



}
