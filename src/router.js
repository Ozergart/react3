import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CharsPage, EpisodesPage} from "./pages";


const router = createBrowserRouter([
    {path:'', element: <MainLayout/>, children:[
            {index:true, element:<Navigate to={'episodes'}/>},
            {path: "episodes", element:<EpisodesPage/>},
            {path: 'characters/:charMassive/:name', element:<CharsPage/>}
        ]}
])

export {
    router
}
