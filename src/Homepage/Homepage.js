import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideBarCustom from "../Components/SidebarCustom";
import { styled } from "@mui/material/styles";
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

  let lengrhDiv = isDrawerOpen ? " w-[240px]" : "w-[50px]";

  return (
    <ThemeProvider theme={theme}>
      <div className="h-screen bg-white font-raleway">
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <CssBaseline />
          <AppBar position="fixed" open={isDrawerOpen}>
            <Toolbar>
              <IconButton
                onClick={isDrawerOpen ? handleDrawerClose : handleDrawerOpen}
                className="text-white"
              >
                {isDrawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                className="text-white ml-auto"
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
          <div className=" mt-16 w-full"></div>
          <div className="flex w-full">
            <div className={lengrhDiv}></div>
            <TableCustom />
          </div>
        </Box>
        <div className=" flex items-end absolute bottom-0">
          <Box className="bg-custom-blue text-white">
            <p className="ml-20 text-center">
              JAKALA S.P.A. S.B. | CORSO DI PORTA ROMANA 15 – 20122 | C.F. E
              P.I. E N° ISCRIZIONE AL REGISTRO IMPRESE DI MILANO 08462130967
              Società unipersonale. Cap. soc. deliberato Euro 3.831.764,00,
              interamente sottoscritto e versato.
            </p>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Homepage;
