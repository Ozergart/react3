import axios from "axios";
import {baseURL} from "../constants/urls";

const ApiServices =  axios.create({baseURL})
export {
    ApiServices
}