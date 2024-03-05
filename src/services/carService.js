import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carService = {
    getAll:()=>apiService.get(urls.cars.base),
    delete:(id)=>apiService.delete(urls.cars.byId(id)),
    update:(id,car)=>apiService.put(urls.cars.byId(id), car),
    create:(car)=>apiService.post(urls.cars.base, car)
}
export {
    carService
}