import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import UserDashboard from "../Pages/UserDashboard/UserDashboard";
import Layout from "../Pages/Layout/Layout";
import TimeSheet from "../Pages/UserDashboard/TimeSheet/TimeSheet";
import TimeSheetForm from "../Pages/UserDashboard/TimeSheetForm/TimeSheetForm";

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
    ],
  },
]);

export default router;
