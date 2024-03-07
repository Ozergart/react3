import {apiService} from "./apiService";
import {urls} from "../constants";

const charService = {
    byIds: (Ids)=>apiService.get(urls.chars.byIds(Ids))
}
export {
    charService
}