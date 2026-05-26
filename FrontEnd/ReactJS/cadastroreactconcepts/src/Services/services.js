import axio from "axios"

// http://localhost:3000

// defeni a porta onde a API local está rodando
const apiPort = "3000"

// defini o endeço/endpoint da api local
const localApi= `http://localhost:${apiPort}`

//defini enderoço para apis externas
 const exernalApi = null

// defini o endereço para apis externas
 const api = axio.create({
    baseURL: localApi
 })

 export default api