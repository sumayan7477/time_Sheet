import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import UserDashboard from "../Pages/UserDashboard/UserDashboard";
import Layout from "../Pages/Layout/Layout";
import TimeSheet from "../Pages/UserDashboard/TimeSheet/TimeSheet";
import TimeSheetForm from "../Pages/UserDashboard/TimeSheetForm/TimeSheetForm";
import AllEmploys from "../Pages/AdminDashboard/AllEmploys/AllEmploys";
import Project from "../Pages/Project/Project";
import Tasks from "../Pages/Tasks/Tasks";
import Timesheet from "../Pages/Timesheet/Timesheet";
import Leaders from "../Pages/Leaders/Leaders";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/AdminDashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/userDashboard",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "/timesheet",
        element: <TimeSheet></TimeSheet> ,
      },
      {
        path: "/timeSheetForm",
        element: <TimeSheetForm></TimeSheetForm> ,
      },
      {
        path: "/allEmploys",
        element: <AllEmploys></AllEmploys> ,
      },
      {
        path: "/projects",
        element: <Project></Project> ,
      },
      {
        path: "/task",
        element: <Tasks></Tasks> ,
      },
      {
        path: "/timesheet",
        element: <Timesheet></Timesheet> ,
      },
      {
        path: "/Leaders",
        element: <Leaders></Leaders> ,
      },
    ],
  },
]);

export default router;
