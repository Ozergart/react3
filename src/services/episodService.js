import {apiService} from "./apiService";
import {urls} from "../constants";

const episodeService = {
    getAll: ()=> apiService.get(urls.episodes),
    empty: (url)=> apiService.get(url)
}
export {
    episodeService
}