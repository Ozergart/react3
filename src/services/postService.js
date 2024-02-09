import {apiService} from "./apiService";

const PostService = {
    getAll:=>apiService.get(urls.posts),
    create:=>apiService.post(urls.posts, data)
}
