import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
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

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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
      <div className="h-screen bg-custom-blue">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ color: "white", mr: 4 }}
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img
                  src="/Jakala_logo_rgb_full_neg.png"
                  className="w-[15%] mt-3"
                  alt="Logo"
                />
              </Typography>

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
        </Box>
        <Drawer
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          anchor="left" // Puoi modificare l'ancora del Drawer a tuo piacimento
        >
          <Box sx={{ width: "300px" }}>
            <div className="flex flex-row">
              <img
                src="/J_rgb_full_neg.png"
                className="w-[20%] ml-3 mt-2"
                alt="Logo"
              />
              <SettingsIcon className="ml-auto m-10 text-white"></SettingsIcon>
            </div>
            <List>
              {["Homepage", "BackOffice", "Contatti", "Supporto"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding sx={{ color: "white" }}>
                    <ListItemButton>
                      <ListItemIcon sx={{ color: "white" }}>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
        <div className="flex justify-center w-full mt-6">
          <div className="w-3/4">
            <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
              <Table
                stickyHeader
                sx={{ minWidth: 650 }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* <Pagination sx={color:"white"}} count={10}></Pagination>{" "} */}
          </div>
        </div>
        {/* <div className="absolute bottom-0">
          <span className="text-sm text-white">
            We are a multidisciplinary team of passionate, talented and diverse
            individuals, united in our mission to deliver effective solutions
            tailored to the needs of our clients. We pride ourselves in bringing
            their unique visions to life.
          </span>
        </div> */}
      </div>
    </ThemeProvider>
  );
}

export default Homepage;
