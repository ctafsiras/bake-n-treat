"use client";

import { useUser } from "@/hooks/useUser";
import { Avatar } from "@nextui-org/react";

const UserDetails = () => {
  const { data: user, error, isPending } = useUser();

  if (error) return <div>{error.name}</div>;
  if (isPending) return <div>Loading...</div>;

  return (
    <main>
      <Avatar src={user.image} className="w-20 h-20 text-large" />

      <h1>Name: {user.name}</h1>
      <h1>Email: {user.email}</h1>
    </main>
  );
};

export default UserDetails;
