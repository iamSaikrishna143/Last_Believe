/* eslint-disable no-unused-vars */
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const APP_ID = import.meta.env.VITE_EDAMAM_APP_ID;
  const APP_KEY = import.meta.env.VITE_EDAMAM_APP_KEY;

  const searchRecipes = async (query) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );

      const data = await res.json();
      setRecipes(data.hits || []);
      console.log('====================================');
      console.log(data.hits);
      console.log('====================================');
    } catch (err) {
      setError("Failed to fetch recipes");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🍳 Recipe Finder
      </h1>

      <SearchBar onSearch={searchRecipes} />

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((item, index) => (
          <RecipeCard key={index} recipe={item.recipe} />
        ))}
      </div>
    </div>
  );
}