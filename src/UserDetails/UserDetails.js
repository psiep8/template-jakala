import React from "react";
import { useParams } from "react-router-dom";
import { rows } from "../Components/TableCustom";
import TextField from "@mui/material/TextField";

function UserDetails() {

  const { id } = useParams();
  
  const userDetails = rows.find((row) => row.id === parseInt(id, 10));

  if (!userDetails) {
    return <div>Utente non trovato</div>;
  }

  return (
    <div>
      <p className="flex justify-center">
        Scheda di {userDetails.nome} {userDetails.cognome}
      </p>
      <div className="flex flex-row w-full mt-3 items-center">
        <div className="flex flex-col w-1/2">
          <h1 className="text-xl font-semibold">Dati Anagrafici</h1>
          <p>
            <span className="font-semibold">Nome:</span> {userDetails.nome}
          </p>
          <p>
            <span className="font-semibold">Cognome:</span>{" "}
            {userDetails.cognome}
          </p>
          <p>
            <span className="font-semibold">Data di Nascita:</span>{" "}
            {userDetails.dataDiNascita}
          </p>
          <p>
            <span className="font-semibold">Luogo di Nascita:</span>{" "}
            {userDetails.luogoDiNascita}
          </p>
          <p>
            <span className="font-semibold">Sesso:</span> {userDetails.sesso}
          </p>
          <p>
            <span className="font-semibold">Codice Fiscale:</span>{" "}
            {userDetails.codiceFiscale}
          </p>
          <p>
            <span className="font-semibold">Indirizzo di Residenza:</span>{" "}
            {userDetails.indirizzoDiResidenza}
          </p>
          <p>
            <span className="font-semibold">Sede Operativa:</span>{" "}
            {userDetails.sedeOperativa}
          </p>
        </div>
        <div className="flex flex-col w-1/2">
          <h1 className="text-xl font-semibold">Dati Aziendali</h1>
          <TextField
            id="outlined-basic-ruolo"
            label="Ruolo Aziendale"
            variant="outlined"
            defaultValue={userDetails.ruoloAziendale}
          />
          <TextField
            id="outlined-basic-manager"
            label="Manager"
            variant="outlined"
            defaultValue={userDetails.manager}
          />
          <TextField
            id="outlined-basic-sede-aziendale"
            label="Sede Operativa Aziendale"
            variant="outlined"
            defaultValue={userDetails.sedeOperativa}
          />
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
