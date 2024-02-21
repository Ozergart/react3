import {apiService} from "./apiService";
import {urls} from "../constants";

const charService = {
    getAll: ()=>apiService.get(urls.chars)
}
export {
    charService
}