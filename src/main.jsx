import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./Component/loginComponets copy/Login.jsx";
import Register from "./Component/loginComponets copy/Register.jsx"
import RecoverPassword from "./Component/loginComponets copy/RecoverPassword.jsx"
<script src="./App.jsx"></script>
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/Register",
      element: <Register/>
    },
    {
      path: "/RecoverPassword",
      element: <RecoverPassword/>
    }
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
  );
