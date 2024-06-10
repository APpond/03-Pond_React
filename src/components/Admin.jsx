import React, { useState } from "react";
import ChangePageButton from "./ChangePageButton";

function Admin({ users, addUser, setUsers }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name,
      lastName,
      position,
    };
    addUser(newUser);
    setName("");
    setLastName("");
    setPosition("");
  };

  const deleteUser = (id) => {
    const updatedUser = users.filter((user) => user.id !== id);
    setUsers(updatedUser);
  };

  const deleteAll = () => {
    setUsers([]);
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-4xl mb-3">Home - Admin Sector</h3>
      <div className="flex flex-col items-center w-full">
        <ChangePageButton />
        <div className="flex flex-col justify-start mt-6 w-full max-w-4xl">
          <p className="text-lg font-semibold">Create User Here</p>
          <form onSubmit={handleSubmit} className="flex gap-3 mt-3 w-full">
            <div className="w-full">
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 border-black rounded px-2 w-full"
              />
            </div>
            <div className="w-full">
              <input
                name="LastName"
                id="LastName"
                type="text"
                placeholder="LastName"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border-2 border-black rounded px-2 w-full"
              />
            </div>
            <div className="w-full">
              <input
                name="position"
                id="position"
                type="text"
                placeholder="Position"
                required
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="border-2 border-black rounded px-2 w-full"
              />
            </div>
            <button
              type="submit"
              className=" font-semibold border-2 px-3 border-black rounded bg-purple-600 hover:bg-purple-900 text-white"
            >
              Save
            </button>
          </form>
        </div>
      </div>
      {users.length > 0 && (
        <div className="w-full max-w-4xl mt-4">
          <table className="w-auto border-collapse border-2 border-black bg-pink-300">
            <thead className="border-2 border-black">
              <tr>
                <th className="w-[200px] border-2 border-black">Name</th>
                <th className="w-[200px] border-2 border-black">Last Name</th>
                <th className="w-[200px] border-2 border-black">Position</th>
                <th className="w-[200px] border-2 border-black">Action</th>
              </tr>
            </thead>
            <tbody className="border-2 border-black bg-white">
              {users.map((user) => (
                <tr key={user.id} className="border-2 border-black">
                  <td className="px-3 border-2 border-black">{user.name}</td>
                  <td className="px-3 border-2 border-black">
                    {user.lastName}
                  </td>
                  <td className="px-3 border-2 border-black">
                    {user.position}
                  </td>
                  <td className="px-3 border-1 border-black flex justify-center">
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="my-1 px-2 text-red-500 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full flex justify-end mt-2">
            <button
              onClick={deleteAll}
              className="my-1 px-2 text-white border-2 border-black rounded bg-red-500 hover:bg-red-900"
            >
              Delete All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;

