import config from "../../Config.json"

const IsAuthenticaded = async () => {
    const auth = await fetch(`${config.baseurl}/isauth`, {
        method: "get", 
        credentials: "include"
    })
        .then(e => {
            if(e.status === 200){
                return true
            }else{
                return false
            }
        })
       return auth 
}

export default IsAuthenticaded