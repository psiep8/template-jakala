import React, { Fragment } from "react";
import LoginPage from "./Login/Login";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import UserDetails from "./UserDetails/UserDetails";
import CssBaseline from "@mui/material/CssBaseline";
import ApplicationRouter from "./app/ApplicationRouter";

const routeDefinition = createRoutesFromElements(
  <Route>
    <Route path="/login" element={<LoginPage></LoginPage>}></Route>
  </Route>
);
const router = createBrowserRouter(routeDefinition);

function App() {
  return (
    <>
      <CssBaseline>
        <ApplicationRouter />
      </CssBaseline>
    </>
  );
}

export default App;
