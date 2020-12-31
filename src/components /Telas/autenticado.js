import react, { useContext } from "react"
import Header from "../headerComponent/hearder"
import { Link } from "react-router-dom"
import "./autenticado.css"
import Context  from "../../providers/basedataProvider"




const TelaAutenticado = (props) => {

    const { data, setDataprovider } = useContext(Context)
    console.log(data)
   


  
    return (
        <>
            < Header nome={data.username} />
            <div className="selectcontent" >
                <Link className="linkselectcontent" to="/"  > <i  class="fas fa-clipboard-check"></i> Minhas Listas </Link>
                <Link className="linkselectcontent" to="new" > Criar listas <i class="fas fa-clipboard-list"></i> </Link>

            </div>

        </>




    )




}


export default TelaAutenticado