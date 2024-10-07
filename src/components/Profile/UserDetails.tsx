"use client";

import { useUser } from "@/hooks/useUser";
import { Avatar } from "@nextui-org/react";
import ProfileUpdateForm from "./ProfileUpdateForm";

const UserDetails = () => {
  const { data: user, error, isPending } = useUser();

  if (error) return <div>{error.name}</div>;
  if (isPending) return <div>Loading...</div>;

  return (
    <main className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md">
      <Avatar
        src={user.image}
        className="w-32 h-32 text-large mb-6"
        alt={`${user.name}'s profile picture`}
      />

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
        <p className="text-gray-600 mb-4">{user.email}</p>
      </div>

      <div className="w-full max-w-md">
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <h3 className="font-semibold mb-2">Account Details</h3>
          <p>
            <span className="font-medium">Member since:</span>{" "}
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
          <p>
            <span className="font-medium">Last Profile Update:</span>{" "}
            {new Date(user.updatedAt).toLocaleDateString()}
          </p>
        </div>

        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
          Edit Profile
        </button>
      </div>
      <ProfileUpdateForm />
    </main>
  );
};

export default UserDetails;
