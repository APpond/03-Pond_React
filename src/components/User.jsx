import React from "react";
import ChangePageButton from "./ChangePageButton";

function User({ users }) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-4xl mb-3">Home - User Sector</h3>
      <div className="flex flex-col items-center">
        <ChangePageButton />
        {users.length === 0 ? (
          <p className="text-lg font-semibold mt-[84px]">No data available</p>
        ) : (
          <table className="w-auto mt-[84px] border-collapse border-2 border-black bg-pink-300">
            <thead className="border-2 border-black">
              <tr className="border-2 border-black">
                <th className="w-[200px] border-2 border-black">Name</th>
                <th className="w-[200px] border-2 border-black">Last Name</th>
                <th className="w-[200px] border-2 border-black">Position</th>
              </tr>
            </thead>
            <tbody className="border-2 border-black">
              {users.map((user) => (
                <tr key={user.id} className="border-2 border-black bg-white">
                  <td className="px-3 border-2 border-black">{user.name}</td>
                  <td className="px-3 border-2 border-black">
                    {user.lastName}
                  </td>
                  <td className="px-3 border-2 border-black">
                    {user.position}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default User;

