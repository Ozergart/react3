import {ApiServices} from "./ApiService";
import {urls} from "../constants/urls";

const Services = {
    albums: ()=>ApiServices.get(urls.albums),
    todos: ()=>ApiServices.get(urls.todos),
    comments:{
        all: ()=>ApiServices.get(urls.comments.base),
        byId: (id)=>ApiServices.get(urls.comments.byId(id))
    },
    posts: (id)=>ApiServices.get(urls.posts.buId(id))
}
export {
    Services
}