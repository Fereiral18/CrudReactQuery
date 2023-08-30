import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const deleteUser = (userId) => {
  return axios.delete(`https://fake-api-spartan.herokuapp.com/users/${userId}`);
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("dataUser");
      return console.log("fue un exito useDeleteUser");
    },
    onError: () => {
      return console.log("ha ocurrido un error useDeleteUser");
    },
  });
};
