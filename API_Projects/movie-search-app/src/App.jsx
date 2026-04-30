import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const searchMovies = async (query) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`
      );

      const data = await res.json();
      setMovies(data.Search || []);
      console.log('====================================');
      console.log(data.Search);
      console.log('====================================');
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🎬 Movie Search App
      </h1>

      <SearchBar onSearch={searchMovies} />

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie,i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
}