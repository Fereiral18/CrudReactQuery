import axios from "axios";
import { useQuery } from "react-query";

const getUser = async () => {
  return await axios.get("https://fake-api-spartan.herokuapp.com/users");
};
export const useDataUser = () => {
  return useQuery("dataUser", getUser, {
    select: (response) => response.data,
  });
};
