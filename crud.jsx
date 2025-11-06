
import React, { useState, useEffect } from "react";

// Sample states and cities
const stateCityData = {
    India:["Telengana","Odisha", "Maharashtra", "Tamilnadu"],
  California: ["Los Angeles", "San Francisco", "San Diego"],
  Texas: ["Houston", "Dallas", "Austin"],
  Florida: ["Miami", "Orlando", "Tampa"],
};

// Sample departments
const departments = ["Engineering", "HR", "Marketing", "Sales"];

function CrudForm() {
  const initialFormState = {
    id: null,
    name: "",
    gender: "",
    state: "",
    city: "",
    pincode: "",
    email: "",
    mobile: "",
    department: "",
    salary: "",
    confirm: false,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [entries, setEntries] = useState([]);
  const [cities, setCities] = useState([]);
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({});

  // Update cities when state changes
  useEffect(() => {
    if (formData.state) setCities(stateCityData[formData.state] || []);
    else setCities([]);
    setFormData({ ...formData, city: "" }); // reset city
  }, [formData.state]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!/^\d{5,6}$/.test(formData.pincode)) newErrors.pincode = "Invalid pincode";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Invalid mobile number";
    if (!formData.department) newErrors.department = "Select a department";
    if (!formData.salary) newErrors.salary = "Salary is required";
    if (!formData.confirm) newErrors.confirm = "Please confirm the form";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (editId !== null) {
      setEntries(
        entries.map((entry) => (entry.id === editId ? { ...formData, id: editId } : entry))
      );
      setEditId(null);
    } else {
      setEntries([...entries, { ...formData, id: Date.now() }]);
    }
    setFormData(initialFormState);
  };

  // Handle edit
  const handleEdit = (id) => {
    const entry = entries.find((e) => e.id === id);
    setFormData(entry);
    setEditId(id);
  };

  // Handle delete
  const handleDelete = (id) => setEntries(entries.filter((e) => e.id !== id));

  return (
    <div style={styles.container}>
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </label>

        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <span style={styles.error}>{errors.gender}</span>}
        </label>

        <label>
          State:
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Select State</option>
            {Object.keys(stateCityData).map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          {errors.state && <span style={styles.error}>{errors.state}</span>}
        </label>

        <label>
          City:
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.city && <span style={styles.error}>{errors.city}</span>}
        </label>

        <label>
          Pincode:
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
          {errors.pincode && <span style={styles.error}>{errors.pincode}</span>}
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </label>

        <label>
          Mobile:
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
          {errors.mobile && <span style={styles.error}>{errors.mobile}</span>}
        </label>

        <label>
          Department:
          <select name="department" value={formData.department} onChange={handleChange}>
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          {errors.department && <span style={styles.error}>{errors.department}</span>}
        </label>

        <label>
          Salary (USD):
          <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
          {errors.salary && <span style={styles.error}>{errors.salary}</span>}
        </label>

        <label>
          <input type="checkbox" name="confirm" checked={formData.confirm} onChange={handleChange} />
          Confirm all information
          {errors.confirm && <span style={styles.error}>{errors.confirm}</span>}
        </label>

        <button type="submit">{editId !== null ? "Update" : "Submit"}</button>
      </form>

      <h3>Employee List</h3>
      {entries.length === 0 ? <p>No entries yet</p> : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>State</th>
              <th>City</th>
              <th>Pincode</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.gender}</td>
                <td>{e.state}</td>
                <td>{e.city}</td>
                <td>{e.pincode}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{e.department}</td>
                <td>${e.salary}</td>
                <td>
                  <button onClick={() => handleEdit(e.id)}>Edit</button>
                  <button onClick={() => handleDelete(e.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// Simple styles
const styles = {
  container: { margin: "20px", fontFamily: "Arial, sans-serif" },
  form: { display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" },
  error: { color: "red", fontSize: "12px", marginLeft: "5px" },
  table: { borderCollapse: "collapse", width: "100%", marginTop: "20px" },
  tableCell: { border: "1px solid #ccc", padding: "5px" },
};

export default CrudForm;