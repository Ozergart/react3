import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () =>apiService.get(urls.users),
    post: (data) => apiService.post(urls.users, data)
}

export {
    postService
}