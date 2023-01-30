import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import EditNote from "./pages/EditNote/EditNote";
import Page404 from "./pages/Page404/Page404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
  },
  {
    path: "/edit-note/:id",
    element: <EditNote />,
    errorElement: <Page404 />,
  },
]);

// createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<App />} errorElement={<Page404 />} />
//     <Route
//       path="/edit-note/:id"
//       element={<EditNote />}
//       errorElement={<Page404 />}
//     />
//   </Route>
// )

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
