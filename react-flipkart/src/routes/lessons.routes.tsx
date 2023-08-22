import { Outlet } from "react-router-dom";
import { MyNavbar } from "../components/navbar/MyNavbar.com";


export let LessonsRoutes={
    path:'/lessons',
    element:<div><Outlet/></div>,
    children:[
        {
            path:'all',
            element:<h1>im home page</h1>
        },
        {
            path:'login',
            element:<h1>im login page</h1>
        },
        {
            path:'register',
            element:<h1>im register page</h1>
        },
    ]
}