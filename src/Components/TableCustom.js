import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
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

function TableCustom() {
  return (
    <>
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
                  <TableCell align="right">Nome</TableCell>
                  <TableCell align="right">Cognome</TableCell>
                  <TableCell align="right">Team</TableCell>
                  <TableCell align="right">Data Assunzione Attiva</TableCell>
                  <TableCell align="right">Dettagli</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{row.nome}</TableCell>
                    <TableCell align="right">{row.cognome}</TableCell>
                    <TableCell align="right">{row.team}</TableCell>
                    <TableCell align="right">
                      {row.dataAssunzioneAttiva}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <InfoIcon></InfoIcon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
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
