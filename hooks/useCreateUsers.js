import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const createUser = (dataUser) => {
  axios.post("https://fake-api-spartan.herokuapp.com/users", dataUser);
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("dataUser");
      return console.log("Se ha creado exitosamente un usuario");
    },

    onError: () => {
      return console.log("ha ocurrido un error al crear el usuario");
    },
  });
};
