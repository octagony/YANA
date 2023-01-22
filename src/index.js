import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import EditNote from "./pages/EditNote.jsx";
import Page404 from "./pages/Page404.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useTransition, animation } from "@react-spring/web";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Page404 />,
//   },
//   {
//     path: "/edit-note/:id",
//     element: <EditNote />,
//     errorElement: <Page404 />,
//   },
// ]);
//
//

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} errorElement={<Page404 />} />
      <Route
        path="/edit-note/:id"
        element={<EditNote />}
        errorElement={<Page404 />}
      />
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
