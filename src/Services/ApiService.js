import axios from "axios";
import {baseURL} from "../constants/urls";

const ApiSerices =  axios.create(baseURL)