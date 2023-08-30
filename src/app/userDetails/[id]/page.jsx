"use client";
import NumbersIcon from "@mui/icons-material/Numbers";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useUsersDetails } from "../../../../hooks/useUserDetails";
import { estilos } from "../../../../components/Styles.component";

export default function userDetails({ params }) {
  const { Label, InputsContainer, BtnLink } = estilos();
  const { id } = params;
  const { data, isLoading } = useUsersDetails(id);
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
  const { name, username, email, city, website } = data;

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "50px",
      }}
    >
      <Stack
        sx={{
          position: "relative",
          backgroundColor: "rgb(247, 239, 254, 1)",
          width: "40vw",
          height: "75vh",
          width: "40vw",
          border: "1px solid grey",
          borderRadius: "6px",
          boxShadow: "0px 0px 6.828890800476074px rgba(0, 0, 0, 0.12)",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#360266",
            textAlign: "center",
            mt: "20px",
            color: "white",
            height: "7vh",
            width: "100%",
            fontSize: "16px",
            fontFamily: "Open Sans Bold",
          }}
        >
          <BtnLink
            href={"/usersPage"}
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              mt: "-3px",
              color: "#fff",
            }}
          >
            <ArrowBackIcon
              sx={{
                color: "#fff",
              }}
            />
            Atras
          </BtnLink>
          <Typography fontSize={"20px"}>
            Detalles de usuarios <NumbersIcon fontSize="small" /> {id}
          </Typography>
        </Stack>
        <Container
          sx={{
            height: "60vh",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Label>Nombre</Label>
          <InputsContainer>{name}</InputsContainer>
          <Label>Nombre de usuario</Label>
          <InputsContainer>{username}</InputsContainer>
          <Label>Email</Label>
          <InputsContainer>{email}</InputsContainer>
          <Label>Genero</Label>
          <InputsContainer>{city}</InputsContainer>
          <Label>Sitio web</Label>
          <InputsContainer>{website}</InputsContainer>
        </Container>
      </Stack>
    </Container>
  );
}
