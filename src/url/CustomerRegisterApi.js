import axios from "axios"
import URL from "./apiURL"



const customerRegister = async(data)=>{

    const requestHeader={
        'Content-Type': 'application/json',
    }
    return await axios.post(
        URL.customerRegister,data,{
            headers:requestHeader
        }
    )
}

export default customerRegister