import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/client/HomeView";
import LoginView from "../views/admin/LoginView";
import AdminView from "../views/admin/AdminView";
import ServiceView from "../views/admin/services/ServiceView";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeView />,
    },
    {
        path: "/admin",
        element: <AdminView />,
        children: [
            {
                path: "services",
                element: <ServiceView />
            }
        ]
    },
    {
        path: "/admin/login",
        element: <LoginView />,
    },
])

export default routes