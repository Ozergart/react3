import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {Cars} from "./components/Cars";

const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {index:true, element: <Navigate to={'cars'}/>},
            {path: 'cars', element:<Cars/>}
        ]}
])
export {
    router
}