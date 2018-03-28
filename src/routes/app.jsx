import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Users from "views/Users/Users.jsx";
import Docks from "views/Docks/Docks.jsx";
import Typography from "views/Typography/Typography.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import Bikes from "views/Bikes/Bikes.jsx";

import {
  Dashboard,
  Person,
  BeachAccess,
  LibraryBooks,
  LocationOn,
  Notifications,
  DirectionsBike
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Users",
    navbarName: "Users",
    icon: Person,
    component: Users
  },
  {
    path: "/docks",
    sidebarName: "Bike Docks",
    navbarName: "Docks",
    icon: BeachAccess,
    component: Docks
  },
  {
    path: "/bikes",
    sidebarName: "Bikes",
    navbarName: "Bikes",
    icon: DirectionsBike,
    component: Bikes
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/map",
    sidebarName: "Docks Map",
    navbarName: "Docks Map",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
