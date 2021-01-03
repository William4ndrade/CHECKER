import React, { useContext } from "react"
import Header from "../headerComponent/hearder"
import { Link } from "react-router-dom"
import "./autenticado.css"
import Context  from "../../providers/basedataProvider"
import CriarLista from "../CriarListaComponent/MainComponent"
import Feedback from "../FeedbackAuthenticaded/FeedbackAuthenticaded"



const TelaAutenticado = (props) => {

    const { data, setDataprovider } = useContext(Context)
    
   


  
    return (
        <>
            < Header nome={data.username} />
            <div className="selectcontent" >
                <Link className="linkselectcontent" to="/"  > <i  class="fas fa-clipboard-check"></i> Minhas Listas </Link>
                <Link className="linkselectcontent" to="new" > Criar listas <i class="fas fa-clipboard-list"></i> </Link>
            </div>
            <div className="maincontent" >
                <CriarLista  />
               
            </div>
           
            


        </>




    )




}


export default TelaAutenticado