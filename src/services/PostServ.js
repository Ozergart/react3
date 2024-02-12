import {ApiService} from "./ApiServ";
import {urls} from "../constatns/urls";


const PostService = {
    getAll: ()=> ApiService.get(urls.cars.base),
    create: (data)=> ApiService.post(urls.cars.base, data),
    updateById:(id, data)=> ApiService.put(urls.cars.byId(id, data)),
    deleteById:(id)=> ApiService.delete(urls.cars.byId(id))
}
export {
    PostService
}