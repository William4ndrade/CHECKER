import React, { useEffect, useState } from "react"
import './App.css';
import Routes from "./components /Router.jsx"
import DataProvider from "./providers/basedataProvider"
import Auth from "./components /Auth/IsAuthenticaded"



const Myapp = () => {

  const [Dataproviders, setDataprovider] = useState({
    authenticaded: true, // paraa teste no celular
    username: null,

  })


  const readCookie = async () => {
    const auth = await Auth()
    if (auth.ok) {
      setDataprovider({
        authenticaded: true,
        username: auth.username
      })

    } else {
      setDataprovider({
        authenticaded: false
      })
    }

  }

  useEffect(() => {
    const ass = async () => await readCookie()
    ass()
  }, [])

  return (
    <DataProvider.Provider value={{data: Dataproviders, set: setDataprovider}}>
          < Routes />
    </DataProvider.Provider>
  )

}


export default Myapp