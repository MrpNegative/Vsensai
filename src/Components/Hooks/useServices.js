import { useEffect, useState } from "react"

const useServices = ()=>{
    const [services, setServices] = useState([])
    
useEffect(()=>{
    fetch("https://raw.githubusercontent.com/MrpNegative/revew-data/main/vsensai.json")
    .then(res=>res.json())
    .then(data => setServices(data))
},[])
return [services, setServices]
}
export default useServices;