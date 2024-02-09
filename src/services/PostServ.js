import {ApiService} from "./ApiServ";
import {urls} from "../constatns/urls";


const PostService = {
    getAll: ()=> ApiService.get(urls.cars),
    post: (data)=> ApiService.post(urls.cars, data)
}
export {
    PostService
}