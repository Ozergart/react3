import axios from "axios";

const {baseURL} = require("../constants/urls");

const apiService = axios.create({baseURL})
export {
    apiService
}

