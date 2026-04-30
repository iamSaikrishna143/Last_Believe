import { useState } from "react";

export default function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJoke = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://v2.jokeapi.dev/joke/Any?type=single,twopart"
      );
      const data = await res.json();
      setJoke(data);
    } catch (err) {
      setError("Failed to fetch joke 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[90%] max-w-md text-center">
        
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          😂 Random Joke Generator
        </h1>

        {loading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {joke && !loading && (
          <div className="mb-4">
            {joke.type === "single" ? (
              <p className="text-lg text-gray-700">{joke.joke}</p>
            ) : (
              <>
                <p className="text-lg text-gray-700 font-semibold">
                  {joke.setup}
                </p>
                <p className="text-gray-600 mt-2">
                  👉 {joke.delivery}
                </p>
              </>
            )}
          </div>
        )}

        <button
          onClick={fetchJoke}
          className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
        >
          Get Joke
        </button>
      </div>
    </div>
  );
}