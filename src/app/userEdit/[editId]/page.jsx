"use client";

import { CircularProgress } from "@mui/material";
import Form from "../../../../components/Form";
import { useUsersDetails } from "../../../../hooks/useUserDetails";

export default function userEdit({ params }) {
  const { editId } = params;
  let id = Number(editId);
  console.log({ id });
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
  console.log("data", data);
  return <Form data={data} />;
}
