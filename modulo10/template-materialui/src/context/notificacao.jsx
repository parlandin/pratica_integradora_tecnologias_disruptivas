import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export const NotificacaoContext = React.createContext();

const NotificacaoProvider = ({ children }) => {
  const [mensagem, setMensagem] = useState("");
  const [tipo, setTipo] = useState("success");
  const [open, setOpen] = useState(false);

  const notificar = (mensagem, tipo) => {
    setMensagem(mensagem);
    setTipo(tipo);
    setOpen(true);
  };

  return (
    <NotificacaoContext.Provider value={{ notificar }}>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => setOpen(false)} severity={tipo}>
          {mensagem}
        </Alert>
      </Snackbar>

      {children}
    </NotificacaoContext.Provider>
  );
};

export default NotificacaoProvider;
