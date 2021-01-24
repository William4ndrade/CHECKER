import React, { useContext } from "react"
import Header from "../headerComponent/hearder"
import { Link } from "react-router-dom"
import "./autenticado.css"
import Context from "../../providers/basedataProvider"
import GetList from "../GetListComponent/GetList"


const TelaAutenticado = (props) => {

    const { data } = useContext(Context)






    return (
        <>
            < Header nome={data.username} />
            <div className="selectcontent" >
                <Link style={window.location.pathname === "/" ? { borderBottom: "1px solid rgb(89, 29, 253)" } : { borderBottom: "none" }} className="linkselectcontent" to="/"  > <i className="fas fa-clipboard-check"></i> Minhas Listas </Link>
                <Link style={window.location.pathname === "/newList" ? { borderBottom: "1px solid rgb(89, 29, 253)" } : { borderBottom: "none" }} className="linkselectcontent" to="newList" > Criar listas <i className="fas fa-clipboard-list"></i> </Link>
            </div>
            <div className="SearchArea" >
                <input placeholder="Pesquise sua lista aqui" className="searchinput" type="search" name="searchlist" id="searchlist"/>
                <i className="iconinput fas fa-search"></i>
            </div>
            <div className="maincontent" >
                <GetList />

            </div>




        </>




    )




}


export default TelaAutenticado