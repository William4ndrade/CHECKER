import React, { useContext } from "react"
import Header from "../headerComponent/hearder"
import { Link } from "react-router-dom"
import "./autenticado.css"
import Context from "../../providers/basedataProvider"
import CriarLista from "../CriarListaComponent/MainComponent"




const TelaAutenticado = (props) => {

    const { data } = useContext(Context)





    return (
        <>
            < Header nome={data.username} />
            <div className="selectcontent" >
                <Link style={window.location.pathname === "/" ? { borderBottom: "1px solid rgb(89, 29, 253)" } : { borderBottom: "none" }} className="linkselectcontent" to="/"  > <i class="fas fa-clipboard-check"></i> Minhas Listas </Link>
                <Link style={window.location.pathname === "/newList" ? { borderBottom: "1px solid rgb(89, 29, 253)" } : { borderBottom: "none" }} className="linkselectcontent" to="newList" > Criar listas <i class="fas fa-clipboard-list"></i> </Link>
            </div>
            <div className="maincontent" >
                <CriarLista />

            </div>




        </>




    )




}


export default TelaAutenticado