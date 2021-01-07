import React, { useContext, useState } from "react"
import Context from "../../providers/basedataProvider"
import "./MainComponent.css"
import Feedback from "../FeedbackAuthenticaded/FeedbackAuthenticaded"
import BaseUrl from "../../Config.json"


export default (props) => {

    const { data, set } = useContext(Context)
    const [buttonActive, setButtonActive] = useState(true)
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
            if (e.value.replace("^\\s+", "") === "") {
                return e
            }
        })

        withContent.forEach(e => {
            const notfalse = arrayInputdata.item.filter(e => e != false)
            if (notfalse.length > 3) {
                arrayInputdata.item[e.index] = false
            }

        })



        setInput(arrayInputdata)

        const heightPage = document.body.scrollHeight;
        window.scrollTo(0, heightPage);

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
        if (Data.length > 0) {
            let FinalDATA = ""
            Data.forEach((e, i) => {
                if (e.length > 250) {
                    setFeedbackfunction(0, `O ${i} possivel mais caracteres que o permitido. ${e.length}/250`)
                    return false
                } else {
                    const finalData = Data.map(e => {
                        return {
                            value: e,
                            checked: false
                        }
                    })

                    FinalDATA = finalData

                }
            })

            return FinalDATA

        } else {
            setFeedbackfunction(0, "Preencha os itens")
            return false

        }

    }

    const ApiComunication = () => {
        const ItensContent = ValidationForm()
        console.log(ItensContent)
        if (ItensContent != false) {
            if (title.value) {
                setButtonActive(false)
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
                }).then(e => {
                    if(e.status === 201){
                        setTitle(false)
                        
                        setFeedbackfunction(1, "Lista adicionada com sucesso")
                        setButtonActive(true)

                    }else{
                        if(e.status === 429){
                            setFeedbackfunction(0, "Você excedeu o limite de requests")
                            setButtonActive(true)

                        }else{
                            setFeedbackfunction(0, "Algo deu errado tente novamente")
                            setButtonActive(true)
                        }
                    }

                })

            } else {
                setFeedbackfunction(0, "Coleque um titulo na sua lista")
            }

        } else {
            setFeedbackfunction(0, "Escreva algo nos itens")
        }






    }


    return (

        <div className="containerCriarlistas" >
            {feedback.active ? <Feedback color={feedback.color} value={feedback.mensage} /> : ""}
            {title.value ? <span className="title" >{title.value}</span> : <span className="title" > Lista <strong className="strongname">{data.username}</strong>  <i className="fa fa-sticky-note litlecard "></i>  </span>}
            <div className="inputs">
                <div className="changetitle" >
                    <input onChange={e => changeFieldTitle(e)} placeholder="Título" maxLength="30" className="mybitches" type="text" name="title" id="title" />
                </div>
                <h3 className="listtitle" > <i style={{ fontSize: "24px", color: "white" }} class="fas fa-list-ol"></i> Escreva sua Lista:</h3>
                <div className="inputsitens">
                    {input.item}
                </div>
                {
                    buttonActive ? <button onClick={ApiComunication} className="buttoncorno" >Salvar</button>  :  <svg xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" style={{margin: "auto", background: "rgba(0, 0, 0, 0) none repeat scroll 0% 0%", display: "block", shapeRendering: "auto" }} width="90px" height="90px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <rect x="19.5" y="27.5" width="11" height="45" fill="#273974">
                        <animate attributeName="y" repeatCount="indefinite" dur="0.7633587786259541s" calcMode="spline" keyTimes="0;0.5;1" values="18.500000000000004;27.5;27.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.15267175572519084s"></animate>
                        <animate attributeName="height" repeatCount="indefinite" dur="0.7633587786259541s" calcMode="spline" keyTimes="0;0.5;1" values="62.99999999999999;45;45" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.15267175572519084s"></animate>
                    </rect>
                    <rect x="44.5" y="27.5" width="11" height="45" fill="#32318a">
                        <animate attributeName="y" repeatCount="indefinite" dur="0.7633587786259541s" calcMode="spline" keyTimes="0;0.5;1" values="20.750000000000004;27.5;27.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.07633587786259542s"></animate>
                        <animate attributeName="height" repeatCount="indefinite" dur="0.7633587786259541s" calcMode="spline" keyTimes="0;0.5;1" values="58.49999999999999;45;45" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.07633587786259542s"></animate>
                    </rect>
                    <rect x="69.5" y="27.5" width="11" height="45" fill="#2146b9">
                        <animate attributeName="y" repeatCount="indefinite" dur="0.7633587786259541s" calcMode="spline" keyTimes="0;0.5;1" values="20.750000000000004;27.5;27.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
                        <animate attributeName="height" repeatCount="indefinite" dur="0.7633587786259541s" calcMode="spline" keyTimes="0;0.5;1" values="58.49999999999999;45;45" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
                    </rect>
                </svg> 
                }

             
                











            </div>





        </div >

    )



}
