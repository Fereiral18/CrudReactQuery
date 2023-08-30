import axios from "axios";
import { useQuery } from "react-query";

const fetchUsersDetails = async ({ queryKey }) => {
  const userId = queryKey[1];
  return await axios.get(
    `https://fake-api-spartan.herokuapp.com/users/${userId}`
  );
};

export const useUsersDetails = (userId) => {
  return useQuery(["users", userId], fetchUsersDetails, {
    onSuccess: () => {
      return console.log("Felicidades! Se cargaron los usuarios");
    },
    onError: () => {
      return console.log("Opps! error");
    },
    select: (res) => {
      return res?.data;
    },
  });
};
