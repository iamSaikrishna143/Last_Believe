import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 px-4 py-2 rounded-xl border outline-none"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-xl">
        Search
      </button>
    </form>
  );
}