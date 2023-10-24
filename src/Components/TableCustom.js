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

function createData(nome, cognome, team, dataAssunzioneAttiva, dettagli) {
  return { nome, cognome, team, dataAssunzioneAttiva, dettagli };
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const rows = [
  createData("Mario", "Rossi", "Team A", "Sì"),
  createData("Anna", "Verdi", "Team B", "No"),
  createData("Luigi", "Bianchi", "Team C", "Sì"),
  createData("Laura", "Neri", "Team A", "No"),
  createData("Lorenzo", "Biraghi", "Team B", "Sì"),
  createData("Giuseppe", "Romagnoli", "Team B", "Sì"),
  createData("Andrea", "Ravasio", "Team B", "Sì"),
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = (name) => {
    setSelectedName(name); // Imposta il nome selezionato
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [selectedName, setSelectedName] = React.useState(""); // Stato per memorizzare il nome selezionato

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
                    DATA ASSUNZIONE ATTIVA
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
                      {row.dataAssunzioneAttiva}
                    </TableCell>
                    <TableCell className=" font-raleway" align="center">
                      <Tooltip title="Disattiva">
                        <IconButton
                          onClick={() =>
                            handleOpen(`${row.nome} ${row.cognome}`)
                          }
                        >
                          <RemoveCircleIcon className="text-jRed"></RemoveCircleIcon>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Dettagli">
                        <IconButton>
                          <InfoIcon></InfoIcon>
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {selectedName}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
                Sei sicuro di voler disattivare l'utente?
              </Typography>
              <Box sx={{ placeItems: "end" }}>
                <Button variant="contained" sx={{ mr: 3 }}>
                  SÌ
                </Button>
                <Button variant="outlined">NO</Button>
              </Box>
            </Box>
          </Modal> */}
          <div>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{selectedName}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Vuoi disattivare l'utente?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button variant="contained" sx={{ mr: 1 }}>
                  SÌ
                </Button>
                <Button variant="outlined">NO</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableCustom;
