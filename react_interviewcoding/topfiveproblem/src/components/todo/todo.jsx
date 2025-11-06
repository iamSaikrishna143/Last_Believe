import React, { useState, useEffect } from "react";

const Todo = () => {
  // Load todos from localStorage
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("All"); // All, Active, Completed
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [editIndex, setEditIndex] = useState(null);

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add / Update Todo
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) return;

    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? { ...todo, ...formData } : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, { ...formData, completed: false }]);
    }

    setFormData({ name: "", phone: "", email: "" });
  };

  // Delete Todo
  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  // Edit Todo
  const handleEdit = (index) => {
    setFormData({
      name: todos[index].name,
      phone: todos[index].phone,
      email: todos[index].email,
    });
    setEditIndex(index);
  };

  // Toggle Completed
  const toggleCompleted = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Filter todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Todo List</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button style={styles.button} type="submit">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      {/* Filters */}
      <div style={styles.filters}>
        {["All", "Active", "Completed"].map((f) => (
          <button
            key={f}
            style={{
              ...styles.filterButton,
              backgroundColor: filter === f ? "#007BFF" : "#ccc",
              color: filter === f ? "#fff" : "#000",
            }}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Todo List */}
      <ul style={styles.list}>
        {filteredTodos.map((todo, index) => (
          <li
            key={index}
            style={{
              ...styles.listItem,
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <div style={{ color: "red" }}>
              <strong>{todo.name}</strong> <br />
              {todo.phone} | {todo.email}
            </div>

            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(index)}
              />
              <button
                style={{ ...styles.actionButton, backgroundColor: "orange" }}
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                style={{ ...styles.actionButton, backgroundColor: "red" }}
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Basic styles
const styles = {
  container: {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  },
  title: { textAlign: "center" },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "15px",
  },
  input: { padding: "8px", fontSize: "16px" },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  filters: { display: "flex", gap: "10px", justifyContent: "center" },
  filterButton: {
    padding: "6px 12px",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
  list: { listStyle: "none", padding: 0 },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  actionButton: {
    marginLeft: "5px",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer",
    color: "#fff",
  },
};

export default Todo;
