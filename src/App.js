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

const routeDefinition = createRoutesFromElements(
  <Route>
    <Route path="/login" element={<LoginPage></LoginPage>}></Route>
    <Route path="/homepage" element={<Homepage></Homepage>}></Route>
    <Route path="/details/:id" element={<UserDetails />}></Route>
  </Route>
);
const router = createBrowserRouter(routeDefinition);

function App() {
  return (
    // <div className="App">
    //   <LoginPage />
    // </div>
    <>
      <CssBaseline>
        <RouterProvider router={router}></RouterProvider>
      </CssBaseline>
    </>
  );
}

export default App;
