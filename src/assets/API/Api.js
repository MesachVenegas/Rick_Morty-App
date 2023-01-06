import axios from "axios";

export const rickApi = axios.post({
    baseURL : 'https://rickandmortyapi.com/api'
})