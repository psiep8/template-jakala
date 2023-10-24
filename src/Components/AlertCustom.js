import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";


const AlertCustom = ({ title, text, type }) => {
  return (
    <Alert severity={type}>
      <AlertTitle>{title}</AlertTitle>
      {text}
    </Alert>
  );
};

export default AlertCustom;
