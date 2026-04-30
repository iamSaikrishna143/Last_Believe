import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WordCard from "./components/WordCard";

export default function App() {
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWord = async (word) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (!res.ok) throw new Error("Word not found");

      const data = await res.json();
      setWordData(data);
    } catch (err) {
      setError(err.message);
      setWordData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">
        📖 Dictionary App
      </h1>

      <SearchBar onSearch={searchWord} />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <WordCard data={wordData} />
    </div>
  );
}