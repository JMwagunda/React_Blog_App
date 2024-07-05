import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar/Navbar.jsx";
import Homepage from "../pages/Homepage/Homepage.jsx";
import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login.jsx";
import Settings from "../pages/Settings/Settings.jsx"
import Single from "../pages/Single/Single.jsx";
import Write from "../pages/Write/Write.jsx";
import Error from "../components/Error/Error.jsx";  // Assuming you have an Error component

// const currentUser = true;  // This should be managed by your state management

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/posts",
        element: <Homepage />,
      },
      {
        // path: "/register",
        // element: currentUser ? <Homepage /> : <Register />,
        path: "/register",
        element: <Register />,
      },
      {
        // path: "/login",
        // element: currentUser ? <Homepage /> : <Login />,
        path: "/login",
        element: <Login />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        // path: "/write",
        // element: currentUser ? <Write /> : <Login />,
        path: "/write",
        element: <Write />,
      },
      {
        // path: "/settings",
        // element: currentUser ? <Settings /> : <Login />,
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
