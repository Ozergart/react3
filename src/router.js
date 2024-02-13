import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {TodosPage} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostPage} from "./pages/PostPage";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                path: 'albums', element: <AlbumsPage/>
            },
            {
                path: 'todos', element: <TodosPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>
            },
            {
                path: 'post/:postId', element: <PostPage/>
            }
        ]
    }])
export {
    router
}