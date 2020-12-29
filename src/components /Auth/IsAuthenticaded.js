import config from "../../Config.json"

const IsAuthenticaded = async () => {
    await fetch(`${config.baseurl}/isauth`)
        .then(e => {
            if(e.status === 200){
                return false
            }else{
                return false
            }
        })
}

export default IsAuthenticaded