import Box from "@mui/material/Box";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import TableCustom from "../Components/TableCustom";
import AppBarCustom from "../Components/AppBarCustom";
import { useSelector } from "react-redux";

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

function Homepage() {
  const open = useSelector((state) => state.sidebar.value);
  // const openModal = useSelector((state) => state.modal.value);
  let lengrhDiv = open ? " w-[240px]" : "w-[50px]";

  return (
    <ThemeProvider theme={theme}>
      <div className="h-screen bg-white font-raleway">
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <CssBaseline />
          <AppBarCustom />
          <div className="flex w-full">
            <div className={lengrhDiv}></div>
            <TableCustom />
          </div>
        </Box>
        {/* <div className=" flex items-end absolute bottom-0 ju">
          <Box className="bg-custom-blue text-white">
            <p className="ml-20 text-center text-sm">
              JAKALA S.P.A. S.B. | CORSO DI PORTA ROMANA 15 – 20122 | C.F. E
              P.I. E N° ISCRIZIONE AL REGISTRO IMPRESE DI MILANO 08462130967
              Società unipersonale. Cap. soc. deliberato Euro 3.831.764,00,
              interamente sottoscritto e versato.
            </p>
          </Box>
        </div> */}
      </div>
    </ThemeProvider>
  );
}

export default Homepage;
