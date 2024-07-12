import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Homepage/Home.jsx";
import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login.jsx";
import Settings from "../pages/Settings/Settings.jsx"
import Single from "../pages/Single/Single.jsx";
import Write from "../pages/Write/Write.jsx";
import Error from "../components/Error/Error.jsx";  // Assuming you have an Error component

const currentUser = true;  // This should be managed by your state management

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Home />,
      },
      {
        path: "/register",
        element: currentUser ? <Home /> : <Register />,
      },
      {
        path: "/login",
        element: currentUser ? <Home /> : <Login />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: currentUser ? <Write /> : <Login />,
      },
      {
        path: "/settings",
        element: currentUser ? <Settings /> : <Login />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default Router;
