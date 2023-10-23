import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import Pagination from "@mui/material/Pagination";
import SideBarCustom from "../Components/SidebarCustom";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CssBaseline from "@mui/material/CssBaseline";
import TableCustom from "../Components/TableCustom";

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
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  marginLeft: 50,
  width: `calc(100% - 50px)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Homepage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="h-screen bg-white">
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={isDrawerOpen}>
            <Toolbar>
              <IconButton
                onClick={isDrawerOpen ? handleDrawerClose : handleDrawerOpen}
              >
                {isDrawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                sx={{ color: "white", ml: "auto" }}
              >
                <p className="text-base mr-4">Andrea Ravasio</p>
                <AccountCircleIcon></AccountCircleIcon>
              </IconButton>
            </Toolbar>
          </AppBar>

          <SideBarCustom
            open={isDrawerOpen}
            closeDrawer={handleDrawerClose}
            openDrawer={handleDrawerOpen}
          />
          <div className=" mt-16 w-full">
            <TableCustom />
          </div>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Homepage;
