import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavHomeOwner from "./components/NavHomeOwner";
import Owner from "./components/Owner";
import Admin from "./components/Admin";
import User from "./components/User";
import NavUserAdmin from "./components/ChangePageButton";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, { ...newUser, id: `n${users.length + 1}` }]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="w-screen h-screen bg-pink-100">
          <NavHomeOwner />
          <div className="flex flex-col items-center ">
            <h1 className="font-bold text-4xl mt-10 mb-3">
              Generation Thailand
            </h1>
            <h3 className="font-bold text-4xl mb-3">React - Assessment</h3>
            <NavUserAdmin />
          </div>
        </div>
      ),
    },
    {
      path: "/admin",
      element: (
        <div className="w-screen h-screen bg-pink-100">
          <NavHomeOwner />
          <div className="flex flex-col items-center ">
            <h1 className="font-bold text-4xl mt-10 mb-3">
              Generation Thailand
            </h1>
            <Admin users={users} addUser={addUser} setUsers={setUsers} />
          </div>
        </div>
      ),
    },
    {
      path: "/user",
      element: (
        <div className="w-screen h-screen bg-pink-100">
          <NavHomeOwner />
          <div className="flex flex-col items-center ">
            <h1 className="font-bold text-4xl mt-10 mb-3">
              Generation Thailand
            </h1>
            <User users={users} />
          </div>
        </div>
      ),
    },
    {
      path: "/owner",
      element: (
        <div className="w-screen h-screen bg-pink-100">
          <NavHomeOwner />
          <Owner />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
