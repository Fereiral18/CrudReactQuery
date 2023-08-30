"use client";
import {
  Button,
  CircularProgress,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import Link from "next/link";

import { useDeleteUser } from "../hooks/useDeleteUsers";
import { estilos } from "./Styles.component";

export const UserList = ({ data, isLoading, isError }) => {
  const { TableCeller, Btn, BtnDelete, TableCellers } = estilos();

  const { mutate } = useDeleteUser();

  if (isLoading)
    return (
      <CircularProgress
        sx={{
          display: "flex",
          ml: "50%",
          mt: "20%",
        }}
        color="inherit"
        size={80}
      />
    );
  if (isError) return <h2>{error.message}</h2>;
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TableContainer
        sx={{
          width: "80vw",
          mt: "50px",
          borderRadius: "5px",
          boxShadow: "0px 0px 6.828890800476074px rgba(0, 0, 0, 0.12)",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCeller>N°</TableCeller>
              <TableCeller>Nombre</TableCeller>
              <TableCeller>Nombre de usuario</TableCeller>
              <TableCeller>Email</TableCeller>
              <TableCeller>Genero</TableCeller>
              <TableCeller>Sitio Web</TableCeller>
              <TableCeller>
                <Button
                  sx={{
                    ml: "10px",
                  }}
                >
                  <Link href={"/addUser"}>
                    <AddCircleOutlineIcon />
                  </Link>
                </Button>
              </TableCeller>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              backgroundColor: "rgb(247, 239, 254, 1)",
            }}
          >
            {data?.map(({ id, name, username, email, city, website }, indx) => (
              <TableRow key={id}>
                <TableCellers>{indx + 1}</TableCellers>
                <TableCellers>{name}</TableCellers>
                <TableCellers>{username}</TableCellers>
                <TableCellers>{email}</TableCellers>
                <TableCellers>{city}</TableCellers>
                <TableCellers>{website}</TableCellers>
                <TableCellers>
                  <Btn
                    href={`/userDetails/${id}`}
                    sx={{
                      mr: "10px",
                    }}
                  >
                    <PermContactCalendarIcon />
                  </Btn>

                  <Btn
                    href={`/userEdit/${id}`}
                    sx={{
                      mr: "10px",
                    }}
                  >
                    <EditIcon />
                  </Btn>

                  <BtnDelete onClick={(e) => mutate(id)}>
                    <DeleteIcon />
                  </BtnDelete>
                </TableCellers>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
