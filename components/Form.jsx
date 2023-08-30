"use client";

import { useState } from "react";

import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEditUser } from "../hooks/useEditUser";
import { useCreateUser } from "../hooks/useCreateUsers";

import { estilos } from "./Styles.component";

export default function ({ data, isLoading, isError }) {
  const { BtnLink, Btn } = estilos();
  const { mutate } = useCreateUser();

  const { mutate: mutateEdit } = useEditUser();
  const [user, setUser] = useState({
    id: data?.id || "",
    name: data?.name || "",
    email: data?.email,
    city: data?.city || "",
    username: data?.username,
    website: data?.website,
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setUser({
      ...user,
      [name]: value,
    });
  };
  console.log("form:", user);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (data?.name.length > 0) {
      console.log("entrando al update");
      mutateEdit(user);
      setUser({
        name: "",
        email: "",
        city: "",
        username: "",
        website: "",
      });
    } else {
      console.log("entrando al create");
      mutate(user);
      setUser({
        name: "",
        email: "",
        city: "",
        username: "",
        website: "",
      });
    }
  };
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
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form>
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ffffff",
            marginTop: "40px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            width: "30vw",
            height: "580px",
            border: "2px solid grey",
            borderColor: "GrayText",
          }}
        >
          <BtnLink href={"/usersPage"}>
            <ArrowBackIcon
              sx={{
                lineHeight: "8px",
              }}
            />
          </BtnLink>
          <TextField
            name="name"
            label="nombre"
            type="text"
            variant="filled"
            onChange={handleChange}
            value={user.name}
            sx={{
              border: "1px solid black",
              borderRadius: "5px",
              width: "80%",
            }}
          />
          <TextField
            name="email"
            label="email"
            variant="filled"
            type="email"
            onChange={handleChange}
            value={user.email}
            sx={{
              border: "1px solid black",
              borderRadius: "5px",
              width: "80%",
            }}
          />
          <TextField
            name="username"
            label="user name"
            type="text"
            variant="filled"
            onChange={handleChange}
            value={user.username}
            sx={{
              border: "1px solid black",
              borderRadius: "5px",
              width: "80%",
            }}
          />
          <TextField
            name="website"
            label="web site"
            type="text"
            variant="filled"
            onChange={handleChange}
            value={user.website}
            sx={{
              border: "1px solid black",
              borderRadius: "5px",
              width: "80%",
            }}
          />
          <FormControl>
            <FormLabel id="city">Genero</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="city"
              defaultValue="Female"
              value={user.city}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Non-binary"
                control={<Radio />}
                label="Non-binary"
              />
            </RadioGroup>
          </FormControl>
          {data?.name.length > 0 ? (
            <Btn
              sx={{ marginTop: "10px", width: "60%" }}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Guardar Cambios
            </Btn>
          ) : (
            <Btn
              sx={{ marginTop: "10px", width: "60%" }}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Agregar usuario
            </Btn>
          )}
        </FormControl>
      </form>
    </Container>
  );
}
