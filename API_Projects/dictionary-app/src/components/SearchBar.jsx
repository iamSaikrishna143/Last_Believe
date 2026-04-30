import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [word, setWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!word.trim()) return;
    onSearch(word);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Search word..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="flex-1 p-3 rounded-xl border outline-none"
      />
      <button className="bg-purple-500 text-white px-4 rounded-xl">
        Search
      </button>
    </form>
  );
}