import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import AppBarCustom from "../Components/AppBarCustom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Homepage from "../Homepage/Homepage";
import UserDetails from "../UserDetails/UserDetails";
import LoginPage from "../Login/Login";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          height: "65px",
        },
        colorPrimary: {
          backgroundColor: "#040066",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#040ab2",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "#cfcfcf",
          color: "#040066",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
  },
});

function ApplicationRouter() {
  const open = useSelector((state) => state.sidebar.value);
  // const openModal = useSelector((state) => state.modal.value);
  let lengrhDiv = open ? " w-[240px]" : "w-[64px]";

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <div className="h-screen bg-white font-raleway">
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <CssBaseline />
              <AppBarCustom />
              <div className="flex w-full">
                <div className={lengrhDiv}></div>
                <Routes>
                  <Route>
                    <Route
                      path="/homepage"
                      element={<Homepage></Homepage>}
                    ></Route>
                    <Route
                      path="/details/:id"
                      element={<UserDetails />}
                    ></Route>
                  </Route>
                </Routes>
              </div>
            </Box>
          </div>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default ApplicationRouter;
