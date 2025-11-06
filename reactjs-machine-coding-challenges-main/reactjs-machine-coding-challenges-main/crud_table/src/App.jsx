import React, { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("userData")) || [];
    setUsers(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(users));
  }, [users]);

  const handleAdd = (user) => {
    if (editUser) {
      setUsers(users.map((u) => (u.id === editUser.id ? user : u)));
      setEditUser(null);
    } else {
      setUsers([...users, { ...user, id: Date.now() }]);
    }
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">React CRUD Form</h1>
      <UserForm onSubmit={handleAdd} editData={editUser} />
      <UserTable users={users} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
