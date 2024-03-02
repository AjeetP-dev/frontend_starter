import AboutPage from "../pages/about-us/AboutPage";
import Dashboard from "../pages/dashboard/dashboard";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/login/login";

export const routesConfig = [
    {
        path: '/login',
        component: Login,
        exact: true,
        public: true,
    },
    {
        path: '/dashboard',
        component: Dashboard,
        exact: true,
        showInNavBar:true
    },
    {
        path: '/',
        component: HomePage,
        exact: true,
        showInNavBar:true
    },
    {
        path: '/about',
        component: AboutPage,
        exact: true,
        public: true,
        showInNavBar:true
    },
];