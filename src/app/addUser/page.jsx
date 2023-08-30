"use client";

import Form from "../../../components/Form";

export default function addUser({ isLoading, isError }) {
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
  if (isError) return <div>{error.message}</div>;
  return <Form />;
}
