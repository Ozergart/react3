

import {apiService} from "./apiService";
import {urls} from "../constants/urls";


const userService = {
    getAll: ()=>apiService.get(urls.users.base),
    biId: (id)=> apiService.get(urls.users.byID+id)
}
export {
    userService
}