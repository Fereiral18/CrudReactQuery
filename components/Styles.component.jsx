import { Button, TableCell, Typography, styled } from "@mui/material";
import Link from "next/link";

export const estilos = () => {
  const BtnLink = styled(Link)({
    color: "#fff",
    backgroundColor: "#360266",
    padding: "8px 16px",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#222",
    },
  });
  const TableCeller = styled(TableCell)({
    backgroundColor: "#360266",
    textAlign: "center",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "bold",
  });
  const TableCellers = styled(TableCell)({
    textAlign: "center",
  });
  const Btn = styled(Button)({
    backgroundColor: "#8517E8",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#222",
    },
  });
  const BtnDelete = styled(Button)({
    backgroundColor: "#8517E8",
    color: "#fff",
    "&:hover": {
      backgroundColor: "red",
    },
  });

  const Label = styled(Typography)({
    fontSize: "25px",
  });
  const InputsContainer = styled(Typography)({
    fontSize: "18px",
    fontFamily: "Open Sans Bold",
  });
  return {
    BtnLink,
    TableCeller,
    Btn,

    TableCellers,
    Label,
    InputsContainer,
    BtnDelete,
  };
};
