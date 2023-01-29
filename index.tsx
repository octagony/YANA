import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./src/pages/App";
import EditNote from "./src/pages/EditNote.js";
import Page404 from "./src/pages/Page404.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")!);

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
