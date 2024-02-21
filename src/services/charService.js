import {apiService} from "./apiService";
import {urls} from "../constants";

const charService = {
    getAll: ()=>apiService.get(urls.chars.base),
    byIds: (Ids)=>apiService.get(urls.chars.byIds(Ids))
}
export {
    charService
}