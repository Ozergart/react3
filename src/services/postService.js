import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const PostService = {
    getAll:() =>apiService.get(urls.posts),
    create:(data)=>apiService.post(urls.posts, data)
}
export {
    PostService
}
