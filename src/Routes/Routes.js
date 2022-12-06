import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import AllCourse from "../component/AllCourse/AllCourse";
import AllCourseOne from "../component/AllCourse/AllCourseone";
import Blog from "../component/Blog/Blog";
import Courses from "../component/Courses/Courses";
import Error from "../component/ErrorPage/Error";
import FAQ from "../component/FAQ/FAQ";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import PrimiumCourse from "../component/PrimiumCourse/PrimiumCourse";
import Register from "../component/Register/Register";
import Main from "../layout/Main";
import PriveteRoute from "../PriveteRoute/PriveteRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/course',
                loader: async () => fetch('https://learn-skill-backend-farhan-sharif.vercel.app/courses'),
                element: <Courses />
            },
            {
                path: '/course/:id',
                loader: async ({ params }) => fetch(`https://learn-skill-backend-farhan-sharif.vercel.app/courses/${params.id}`),
                element: <AllCourseOne />
            },
            {
                path: '/premium/:id',
                loader: async ({ params }) => fetch(`https://learn-skill-backend-farhan-sharif.vercel.app/premium/${params.id}`),
                element: <PriveteRoute><PrimiumCourse /></PriveteRoute>
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/Blog',
                element: <Blog />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])