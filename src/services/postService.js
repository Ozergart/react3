
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getAll: ()=> apiService.get(urls.posts.base),
    biId: (id)=> apiService.get(urls.posts.biID+id),
    byUserId: (userId)=>apiService.get(urls.posts.base+'/?userId='+userId)
}
export {
    postService
}