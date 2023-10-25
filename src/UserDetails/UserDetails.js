import React from "react";
import { useParams } from "react-router-dom";
import { rows } from "../Components/TableCustom";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function UserDetails() {
  const { id } = useParams();

  const userDetails = rows.find((row) => row.id === parseInt(id, 10));

  if (!userDetails) {
    return <div>Utente non trovato</div>;
  }

  return (
    <div className="flex flex-col w-full mt-4">
      <p className="text-center text-2xl font-bold mt-3 font-raleway">
        Scheda di {userDetails.nome} {userDetails.cognome}
      </p>
      <div className="flex flex-row w-full p-4 mt-3 items-center">
        <div className="flex flex-col items-center w-1/2 space-y-2">
          <h1 className="text-xl font-semibold font-raleway">
            Dati Anagrafici
          </h1>
          <p>
            <span className="font-semibold font-raleway">Nome:</span>{" "}
            {userDetails.nome}
          </p>
          <p>
            <span className="font-semibold font-raleway">Cognome:</span>{" "}
            {userDetails.cognome}
          </p>
          <p>
            <span className="font-semibold font-raleway">Data di Nascita:</span>{" "}
            {userDetails.dataDiNascita}
          </p>
          <p>
            <span className="font-semibold font-raleway">
              Luogo di Nascita:
            </span>{" "}
            {userDetails.luogoDiNascita}
          </p>
          <p>
            <span className="font-semibold font-raleway">Sesso:</span>{" "}
            {userDetails.sesso}
          </p>
          <p>
            <span className="font-semibold font-raleway">Codice Fiscale:</span>{" "}
            {userDetails.codiceFiscale}
          </p>
          <p>
            <span className="font-semibold font-raleway">
              Indirizzo di Residenza:
            </span>{" "}
            {userDetails.indirizzoDiResidenza}
          </p>
        </div>
        <div className="flex flex-col w-1/2 items-center space-y-2">
          <h1 className="text-xl font-semibold font-raleway">Dati Aziendali</h1>
          <TextField
            id="outlined-basic-ruolo"
            label="Ruolo Aziendale"
            variant="outlined"
            defaultValue={userDetails.ruoloAziendale}
            className="mb-2 w-1/2"
          />
          <TextField
            id="outlined-basic-manager"
            label="Manager"
            variant="outlined"
            defaultValue={userDetails.manager}
            className="mb-2 w-1/2"
          />
          <InputLabel id="demo-simple-select-label" className="text-xs">Sede Operativa</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userDetails.sedeOperativa}
            className="w-1/2"
          >
            <MenuItem value={userDetails.sedeOperativa}>
              {userDetails.sedeOperativa}
            </MenuItem>
            <MenuItem value={"Roma"}>Roma</MenuItem>
            <MenuItem value={"New York"}>New York</MenuItem>
            <MenuItem value={"Londra"}>Londra</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
