import React from "react";

const UserTable = ({ users, onDelete, onEdit }) => {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th className="border p-2">Image</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Phone</th>
          <th className="border p-2">Gender</th>
          <th className="border p-2">Country</th>
          <th className="border p-2">State</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td className="border p-2">
              {u.image && <img src={u.image} alt="" className="h-12" />}
            </td>
            <td className="border p-2">{u.name}</td>
            <td className="border p-2">{u.email}</td>
            <td className="border p-2">{u.number}</td>
            <td className="border p-2">{u.gender.join(", ")}</td>
            <td className="border p-2">{u.country}</td>
            <td className="border p-2">{u.state}</td>
            <td className="border p-2">
              <button
                className="bg-green-500 text-white px-2 mr-2"
                onClick={() => onEdit(u)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2"
                onClick={() => onDelete(u.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
