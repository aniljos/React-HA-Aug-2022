import Counter from "../components/Counter";
import Hello from "../components/Hello";
import ListProducts from "../components/ListProducts";
import Login from "../components/Login";
import Search from "../components/Search";

export const appRoutes = [

    {
        path: "/home",
        title: "Home",
        component: Hello,
        isMenuItem: true,
        secure: false
    },
    {
        path: "/counter",
        title: "Counter",
        component: Counter,
        isMenuItem: true,
        secure: false
    },
    {
        path: "/products",
        title: "Products",
        component: ListProducts,
        isMenuItem: true,
        secure: true
    },
    {
        path: "/search",
        title: "Search",
        component: Search,
        isMenuItem: true,
        secure: true
    },
    {
        path: "/login",
        title: "Login",
        component: Login,
        isMenuItem: true,
        secure: false
    }

]