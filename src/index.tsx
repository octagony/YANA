import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import EditNote from "./pages/EditNote.js";
import Page404 from "./pages/Page404.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
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
