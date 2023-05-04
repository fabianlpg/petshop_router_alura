//https://axios-http.com/es/docs/intro
import axios from "axios"

export const api = axios.create({
    baseURL: "https://apitestreactprueba.onrender.com"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}