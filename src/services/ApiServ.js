import axios from "axios";

const {baseURL} = require("../constatns/urls");


const ApiService = axios.create({baseURL})
export {
    ApiService
}