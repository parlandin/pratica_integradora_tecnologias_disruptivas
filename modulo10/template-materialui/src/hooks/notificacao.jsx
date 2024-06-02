import React, { useContext } from "react";
import { NotificacaoContext } from "../context/notificacao";

const useNotificacao = () => {
  const { notificar } = useContext(NotificacaoContext);

  const notificarSucesso = (mensagem) => {
    notificar(mensagem, "success");
  };

  const notificarErro = (mensagem) => {
    notificar(mensagem, "error");
  };

  const notificarAlerta = (mensagem) => {
    notificar(mensagem, "warning");
  };

  return { notificarSucesso, notificarErro, notificarAlerta };
};

export default useNotificacao;
