import {apiService} from "./apiService";
import {urls} from "../constants";

const episodeService = {
    getAll: ()=> apiService.get(urls.episodes)
}
export {
    episodeService
}