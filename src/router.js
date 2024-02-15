import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/mainLayout";
import {UsersPage} from "./pages/UsersPages/UsersPage";
import {PostsPage} from "./pages/PostsPages/PostsPage";
import {userService} from "./services/userService";
import {PostDetailPage} from "./pages/PostsPages/PostDetailPage";
import {UserDetailPage} from "./pages/UsersPages/UserDetailPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {index:true, element: <Navigate to={"/users"}/> },
            {path:'users', loader: ()=>userService.getAll() ,  element: <UsersPage/>  },
            {path: 'user-detail/:userId', element: <UserDetailPage/>, children:[
                    {path:'posts', element: <PostsPage/>}
                ]},
            {path:'postDetails/:postId', element:<PostDetailPage/>}
        ]
    }
])
export {router}