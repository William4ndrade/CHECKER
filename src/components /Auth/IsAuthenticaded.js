import config from "../../Config.json"
import {react} from "react"


const IsAuthenticaded = async () => {
    const auth = await fetch(`${config.baseurl}/isauth`, {
        method: "get", 
        credentials: "include"
    })  
        .then(async e => {
            
            return {
                status: e.status,
                username: await e.json()
                
            }
        })
        .then(e => {
            if(e.status === 200){
                return {
                    ok: true,
                    username: e.username.user
                }
            }else{
                return false
            }
        })
       return auth 
}

export default IsAuthenticaded