"use client";

import { UserList } from "../../../components/UserList";
import { useDataUser } from "../../../hooks/useUser";

export default function UserPage() {
  const { data, isLoading, isError } = useDataUser();
  return <UserList data={data} isLoading={isLoading} isError={isError} />;
}
