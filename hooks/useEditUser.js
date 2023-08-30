import { useQueryClient, useMutation } from "react-query";
import axios from "axios";

const editUser = async (users) => {
  return await axios.put(
    `https://fake-api-spartan.herokuapp.com/users/${users.id}`,
    users
  );
};

export const useEditUser = () => {
  const queryClient = useQueryClient();
  return useMutation(editUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("dataUser");
      return console.log("felicidades ha funcionado editUser");
    },
    onError: () => {
      return console.log("ha ocurrido un error con editUser");
    },
    select: (res) => {
      return res?.data;
    },
  });
};
