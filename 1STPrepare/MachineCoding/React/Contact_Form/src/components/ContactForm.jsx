/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

function ContactForm({ onSubmit, editContact }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editContact) setForm(editContact);
  }, [editContact]);

  // 🔥 Validation Function
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.length < 3) {
      newErrors.name = "Minimum 3 characters required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔥 Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onSubmit(form);
    setForm({ name: "", email: "", phone: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-3">

      {/* Name */}
      <div>
        <input
          className="border p-2 w-full rounded"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          className="border p-2 w-full rounded"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <input
          className="border p-2 w-full rounded"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone}</p>
        )}
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        {editContact ? "Update Contact" : "Add Contact"}
      </button>
    </form>
  );
}

export default ContactForm;