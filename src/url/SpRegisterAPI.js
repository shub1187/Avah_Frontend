import axios from "axios"
import URL from "./apiURL"



const spRegister = async(data)=>{

    const requestHeader={
        'Content-Type': 'application/json',
    }
    return await axios.post(
        URL.spRegister,data,{
            headers:requestHeader
        }
    )
}

export default spRegister