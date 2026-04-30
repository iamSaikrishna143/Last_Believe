// src/components/Employee.jsx
import { useEffect, useState } from "react";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee
} from "../services/api";
import "./Employee.css";

const states = ["Odisha", "Karnataka", "Tamil Nadu", "Delhi"];
const departments = ["HR", "IT", "Finance", "Marketing"];

export default function Employee() {
  const [employees, setEmployees] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    gender: "",
    state: "",
    city: "",
    pincode: "",
    email: "",
    mobile: "",
    department: "",
    salary: 30000,
    confirm: false
  });



  const loadEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
    setFiltered(res.data);
  };

  const applyFilter = () => {
    const data = employees.filter(
      e =>
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.email.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(data);
    setPage(1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.confirm) return alert("Confirm details");

    editId
      ? await updateEmployee(editId, form)
      : await addEmployee(form);

    resetForm();
    loadEmployees();
  };

  const resetForm = () => {
    setForm({
      name: "",
      gender: "",
      state: "",
      city: "",
      pincode: "",
      email: "",
      mobile: "",
      department: "",
      salary: 30000,
      confirm: false
    });
    setEditId(null);
  };

  const edit = (emp) => {
    setEditId(emp._id);
    setForm(emp);
  };

  const remove = async (id) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  // Pagination
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  );
    useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadEmployees();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    applyFilter();
  }, [search, employees]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="top-bar">
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setDark(!dark)}>
          {dark ? "Light" : "Dark"}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <select name="state" value={form.state} onChange={handleChange}>
          <option value="">State</option>
          {states.map(s => <option key={s}>{s}</option>)}
        </select>

        <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
        <input name="pincode" placeholder="Pincode" value={form.pincode} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="mobile" placeholder="Mobile" value={form.mobile} onChange={handleChange} />

        <select name="department" value={form.department} onChange={handleChange}>
          <option value="">Department</option>
          {departments.map(d => <option key={d}>{d}</option>)}
        </select>

        <div className="range">
          <label>Salary: ₹{form.salary}</label>
          <input
            type="range"
            min="5000"
            max="200000"
            step="1000"
            name="salary"
            value={form.salary}
            onChange={handleChange}
          />
        </div>

        <label>
          <input type="checkbox" name="confirm" checked={form.confirm} onChange={handleChange} />
          Confirm details
        </label>

        <button type="submit">{editId ? "Update" : "Submit"}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Dept</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map(emp => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>₹{emp.salary}</td>
              <td>
                <button onClick={() => edit(emp)}>Edit</button>
                <button onClick={() => remove(emp._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <span>{page} / {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}
