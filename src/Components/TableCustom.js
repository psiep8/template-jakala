import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

function createData(nome, cognome, team, dataAssunzioneAttiva, dettagli) {
  return { nome, cognome, team, dataAssunzioneAttiva, dettagli };
}

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
    backgroundColor: theme.palette.common.black,
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

function TableCustom() {
  return (
    <>
      <div className="flex justify-center w-full mt-6">
        <div className="w-3/4">
          <TableContainer component={Paper} className=" max-h-[500px]">
            <Table
              stickyHeader
              className="min-w-[650px]"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell className=" font-raleway" align="right">Nome</StyledTableCell>
                  <StyledTableCell className=" font-raleway" align="right">Cognome</StyledTableCell>
                  <StyledTableCell className=" font-raleway" align="right">Team</StyledTableCell>
                  <StyledTableCell className=" font-raleway" align="right">
                    Data Assunzione Attiva
                  </StyledTableCell>
                  <StyledTableCell className=" font-raleway" align="right">Dettagli</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow 
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell className=" font-raleway" align="right">{row.nome}</TableCell>
                    <TableCell className=" font-raleway" align="right">{row.cognome}</TableCell>
                    <TableCell className=" font-raleway" align="right">{row.team}</TableCell>
                    <TableCell className=" font-raleway" align="right">
                      {row.dataAssunzioneAttiva}
                    </TableCell>
                    <TableCell className=" font-raleway" align="right">
                      <IconButton>
                        <InfoIcon></InfoIcon>
                      </IconButton>
                    </TableCell>
                  </StyledTableRow >
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default TableCustom;
