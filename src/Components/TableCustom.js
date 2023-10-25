import Table from "@mui/material/Table";
import React from "react";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton, Input, TableSortLabel } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import TextField from "@mui/material/TextField";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Link } from "react-router-dom";

// import { modalActions } from "../feature/modal/modalSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Tooltip from "@mui/material/Tooltip";
import AlertCustom from "../Components/AlertCustom";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function createData(
  id,
  nome,
  cognome,
  team,
  dataAssunzione,
  attivazione,
  dataDiNascita,
  luogoDiNascita,
  sesso,
  codiceFiscale,
  indirizzoDiResidenza,
  ruoloAziendale,
  manager,
  sedeOperativa
) {
  return {
    id,
    nome,
    cognome,
    team,
    dataAssunzione,
    attivazione,
    dataDiNascita,
    luogoDiNascita,
    sesso,
    codiceFiscale,
    indirizzoDiResidenza,
    ruoloAziendale,
    manager,
    sedeOperativa,
  };
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const rows = [
  createData(
    1,
    "Mario",
    "Rossi",
    "Team A",
    "2020-01-15",
    "Sì",
    "1990-03-15",
    "Milano",
    "Maschio",
    "RSSMRA90A15H501X",
    "Via Roma 123",
    "Sviluppatore",
    "Giovanni Bianchi",
    "Milano"
  ),
  createData(
    2,
    "Anna",
    "Verdi",
    "Team B",
    "2021-05-10",
    "No",
    "1988-07-22",
    "Roma",
    "Femmina",
    "VRDANN88L22H123Y",
    "Via Napoli 456",
    "Manager",
    "Antonio Neri",
    "Roma"
  ),
  createData(
    3,
    "Luigi",
    "Bianchi",
    "Team C",
    "2019-11-03",
    "Sì",
    "1995-11-10",
    "Napoli",
    "Maschio",
    "BNCLUI95T10N789Z",
    "Via Venezia 789",
    "Sviluppatore",
    "Francesca Rossi",
    "Napoli"
  ),
  createData(
    4,
    "Laura",
    "Neri",
    "Team A",
    "2022-03-18",
    "No",
    "1987-02-05",
    "Torino",
    "Femmina",
    "NRILAU87B05T987A",
    "Via Firenze 321",
    "Manager",
    "Paolo Verdi",
    "Torino"
  ),
  createData(
    5,
    "Lorenzo",
    "Biraghi",
    "Team B",
    "2020-09-05",
    "Sì",
    "1992-09-18",
    "Milano",
    "Maschio",
    "BRGLOR92P18T654D",
    "Via Genova 567",
    "Sviluppatore",
    "Daniela Romagnoli",
    "Milano"
  ),
  createData(
    6,
    "Giuseppe",
    "Romagnoli",
    "Team B",
    "2021-08-12",
    "Sì",
    "1993-06-30",
    "Roma",
    "Maschio",
    "RMNGPP93F30R321E",
    "Via Palermo 987",
    "Sviluppatore",
    "Roberto Rossi",
    "Roma"
  ),
  createData(
    7,
    "Andrea",
    "Ravasio",
    "Team B",
    "2018-04-25",
    "Sì",
    "1989-12-07",
    "Napoli",
    "Maschio",
    "RVSAND89C07N123T",
    "Via Catania 234",
    "Sviluppatore",
    "Maria Verdi",
    "Napoli"
  ),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "grey",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "white",
  border: "2px solid #040066",
  boxShadow: 24,
  p: 4,
};

function TableCustom() {
  const [openAlert, setOpenAlert] = React.useState(false);
  const [openFirstDialog, setOpenFirstDialog] = React.useState(false);
  const [selectedName, setSelectedName] = React.useState(""); // Stato condiviso tra i dialog

  const handleOpenFirstDialog = (name) => {
    setSelectedName(name); // Imposta il nome selezionato
    setOpenFirstDialog(true);
  };

  const handleCloseFirstDialog = () => {
    setOpenFirstDialog(false);
    setOpenAlert(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  // const dispatch = useDispatch();
  // const isModalOpen = useSelector((state) => state.modal.value);
  // const open = () => {
  //   dispatch(modalActions.open());
  // };
  // const close = () => {
  //   dispatch(modalActions.close());
  // };
  return (
    <>
      <div className="flex justify-center w-full mt-6">
        <div className="w-3/4">
          <div className="flex flex-row mb-3 w-full justify-between items-center">
            <p className="font-bold text-lg">UTENTI</p>
            <div className="flex flex-row items-center space-x-2">
              <FilterAltIcon />

              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Cerca utente..."
                size="small"
              />
              <Button
                startIcon={<PersonAddAlt1Icon></PersonAddAlt1Icon>}
                variant="outlined"
              >
                Aggiungi utente
              </Button>
            </div>
          </div>
          <TableContainer component={Paper} className=" max-h-[500px]">
            <Table
              stickyHeader
              className="min-w-[650px]"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell className=" font-raleway" align="center">
                    {/* <TableSortLabel></TableSortLabel> */}
                    NOME
                  </StyledTableCell>
                  <StyledTableCell className=" font-raleway" align="center">
                    COGNOME
                  </StyledTableCell>
                  <StyledTableCell className=" font-raleway" align="center">
                    TEAM
                  </StyledTableCell>
                  <StyledTableCell className=" font-raleway" align="center">
                    DATA ASSUNZIONE
                  </StyledTableCell>
                  <StyledTableCell className=" font-raleway" align="center">
                    ATTIVA
                  </StyledTableCell>
                  <StyledTableCell className=" font-raleway" align="center">
                    DETTAGLI
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell className=" font-raleway" align="center">
                      {row.nome}
                    </TableCell>
                    <TableCell className=" font-raleway" align="center">
                      {row.cognome}
                    </TableCell>
                    <TableCell className=" font-raleway" align="center">
                      {row.team}
                    </TableCell>
                    <TableCell className=" font-raleway" align="center">
                      {row.dataAssunzione}
                    </TableCell>
                    <TableCell className=" font-raleway" align="center">
                      {row.attivazione}
                    </TableCell>
                    <TableCell className=" font-raleway" align="center">
                      <Tooltip title="Disattiva">
                        <IconButton
                          onClick={() =>
                            handleOpenFirstDialog(`${row.nome} ${row.cognome}`)
                          }
                        >
                          <RemoveCircleIcon className="text-jRed"></RemoveCircleIcon>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Dettagli">
                        <Link to={`/details/${row.id}`}>
                          <IconButton>
                            <InfoIcon></InfoIcon>
                          </IconButton>
                        </Link>
                      </Tooltip>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Dialog
            open={openFirstDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseFirstDialog}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{selectedName}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Vuoi disattivare l'utente?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                onClick={() => handleCloseFirstDialog()}
                sx={{ mr: 1 }}
              >
                SÌ
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleCloseFirstDialog()}
              >
                NO
              </Button>
            </DialogActions>
          </Dialog>
          <Stack spacing={2} sx={{ width: "50%" }}>
            <Snackbar
              open={openAlert}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert severity="success" onClose={handleClose}>
                Utente disattivato correttamente
              </Alert>
              {/* <AlertCustom
                type={"success"}
                text={"Utente disattivato correttamente"}
                onClose={handleClose}
              ></AlertCustom> */}
            </Snackbar>
          </Stack>
        </div>
      </div>
    </>
  );
}

export default TableCustom;
