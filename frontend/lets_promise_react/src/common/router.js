import GroupIcon from "@material-ui/icons/Group";
import { Home, Info } from "@material-ui/icons/";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import About from "../components/About";
import HomePage from "../components/Home";
import Users from "../components/Users";

const NavBarInfo = [
    {
        title: "Home",
        icon: <Home />,
        exact: true,
        path: "/",
        component: <HomePage/>
    },
    {
        title: "About",
        icon: <Info />,
        path: "/about",
        component: <About />
    },
    {
        title: "Users",
        icon: <GroupIcon />,
        path: "/users",
        component: <Users />
    },
    {
        title: "Profile",
        icon: <AccountCircleIcon />,
        path: "/profile",
        component: <About />
    },
];

export default NavBarInfo;