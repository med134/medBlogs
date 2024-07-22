import React from "react";
async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
}
const Users = async () => {
  const dataUser = await getUsers();
  return (
    <div>
      {dataUser?.map((user) => {
        <div key={user._id}>
          <h1>{user.name}</h1>
        </div>;
      })}
    </div>
  );
};

export default Users;
