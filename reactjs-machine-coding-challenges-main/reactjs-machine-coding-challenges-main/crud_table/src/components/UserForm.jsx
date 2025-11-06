import React, { useState, useEffect } from "react";

const countryState = {
  India: ["Odisha", "Karnataka", "Maharashtra"],
  USA: ["California", "Texas", "Florida"],
};

const UserForm = ({ onSubmit, editData }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    gender: [],
    country: "",
    state: "",
    image: "",
  });

  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "gender") {
      setForm((prev) => ({
        ...prev,
        gender: checked
          ? [...prev.gender, value]
          : prev.gender.filter((g) => g !== value),
      }));
    } else if (name === "image") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, image: reader.result }));
      };
      if (file) reader.readAsDataURL(file);
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, id: editData ? form.id : Date.now() });
    setForm({
      name: "",
      email: "",
      number: "",
      gender: [],
      country: "",
      state: "",
      image: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="border p-2 w-full"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border p-2 w-full"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="number"
        placeholder="Phone Number"
        className="border p-2 w-full"
        value={form.number}
        onChange={handleChange}
        required
      />

      <div>
        Gender:
        <label className="ml-2">
          <input
            type="checkbox"
            name="gender"
            value="Male"
            checked={form.gender.includes("Male")}
            onChange={handleChange}
          />
          Male
        </label>
        <label className="ml-2">
          <input
            type="checkbox"
            name="gender"
            value="Female"
            checked={form.gender.includes("Female")}
            onChange={handleChange}
          />
          Female
        </label>
      </div>

      <select
        name="country"
        value={form.country}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      >
        <option value="">Select Country</option>
        {Object.keys(countryState).map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {form.country && (
        <select
          name="state"
          value={form.state}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        >
          <option value="">Select State</option>
          {countryState[form.country].map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      )}

      <input type="file" name="image" accept="image/*" onChange={handleChange} />

      {form.image && (
        <img src={form.image} alt="Preview" className="h-20 mt-2" />
      )}

      <button className="bg-blue-500 text-white px-4 py-2">
        {editData ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default UserForm;
