import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Dashboard from "../layouts/Dashboard";
import Profile from "../Pages/Employers/Profile";
import EmployerDashboard from "../Pages/Employers/UserDashboard";
import MyJobs from "../Pages/Employers/MyJobs";
import AllJobs from "../Pages/AllJobs";
import TransperentHeader from "../layouts/TransparentHeader";
import CommonHeader from "../layouts/CommonHeader";
import Candidates from "../Pages/Candidates";

const router = createBrowserRouter([
    {
        path: "/",
        element: <TransperentHeader />,
        children: [
            {
                path: "",
                element: <Home />,
            }
        ]
    },
    {
        path: "/",
        element: <CommonHeader />,
        children: [
            {
                path: "jobs",
                element: <AllJobs />,
            },
            {
                path: "candidates",
                element: <Candidates />,
            },
            
        ]
    },

    {
        path: "/employer",
        element: <Dashboard />,
        children: [
            {
                path: "dashboard",
                element: <EmployerDashboard />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "my-jobs",
                element: <MyJobs />
            },
        ]
    },
    {
        path: "/home",
        element: <div>Hello Home!</div>,
    },
]);


export default router;