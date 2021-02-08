import React, { useContext, useState } from "react"
import Header from "../headerComponent/hearder"
import { Link } from "react-router-dom"
import "./autenticado.css"
import Context from "../../providers/basedataProvider"
import GetList from "../GetListComponent/GetList"
import BaseUrl from "../../Config.json"


const TelaAutenticado = (props) => {

    const context = useContext(Context)
 
    async function SearchList(target) {
        const value = target.target.value.trim()
        if (value.length > 0) {
            await fetch(BaseUrl.baseurl + "/Search", {
                method: "GET",
                headers: {
                    code: btoa(value),
                    'Content-Type': 'application/json'
                },
                credentials: "include"

            }).then(async e => {
                const searchdata = await e.json()
                const teste = {...context.data}
              
                if (e.status !== 204) {
                    teste.AllLists = searchdata.data 
                    context.set(teste)
                } else {
                    teste.AllLists = []
                    context.set(teste)
                }


            })
        }else{
            const teste = {...context.data}
            teste.AllLists = []
            context.set(teste)
        }

        

    }


    const {data} = useContext(Context)

    return (
        <>
            < Header nome={data.username} />
            <div className="selectcontent" >
                <Link style={window.location.pathname === "/" ? { borderBottom: "1px solid rgb(89, 29, 253)" } : { borderBottom: "none" }} className="linkselectcontent" to="/"  > <i className="fas fa-clipboard-check"></i> Minhas Listas </Link>
                <Link style={window.location.pathname === "/newList" ? { borderBottom: "1px solid rgb(89, 29, 253)" } : { borderBottom: "none" }} className="linkselectcontent" to="newList" > Criar listas <i className="fas fa-clipboard-list"></i> </Link>
            </div>
            <div className="SearchArea" >
                <input onKeyUp={e => SearchList(e)} placeholder="Pesquise sua lista aqui" className="searchinput" type="search" name="searchlist" id="searchlist"/>
                <i className="iconinput fas fa-search"></i>
            </div>
            <div className="maincontent" >
                <div className="mainLists">
                    <GetList/>  
                </div>
                 
             


            </div>




        </>




    )




}


export default TelaAutenticado