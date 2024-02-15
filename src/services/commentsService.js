import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService ={
    byPostId: (postId)=>apiService.get(urls.comments.byPostId(postId))
}
export {
    commentsService
}