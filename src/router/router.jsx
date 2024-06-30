import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../Layout";
import ManageStudent from "../pages/ManageStudent";
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import AddStudent from "../pages/AddStudent";
import ErrrorPage from "../pages/ErrroPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
          {
            path: "/",
            element: <PrivateRoute><ManageStudent/></PrivateRoute>
          },
          {
              path: "add-student",
              element: <PrivateRoute><AddStudent/></PrivateRoute>
          },
          {
              path: "Manage-Student",
              element: <PrivateRoute><ManageStudent/></PrivateRoute>
          },
        ]
      },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
      path: '*',
      element: <ErrrorPage/>
    }
])

export default router;