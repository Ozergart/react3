import {baseURL} from "../constants/urls";
import axios from "axios";



const apiService =  axios.create({baseURL})
export{
    apiService
}