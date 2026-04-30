import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      
      if (!res.ok) {
        throw new Error("User not found");
      }

      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError("User not found 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md text-center">
        
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          🔍 GitHub User Finder
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 border p-2 rounded-lg outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            onClick={fetchUser}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
          >
            Search
          </button>
        </div>

        {/* States */}
        {loading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* User Card */}
        {user && (
          <div className="mt-4">
            <img
              src={user.avatar_url}
              alt="avatar"
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">@{user.login}</p>
            <p className="text-sm mt-2">{user.bio}</p>

            <div className="flex justify-around mt-4 text-sm">
              <div>
                <p className="font-bold">{user.followers}</p>
                <p>Followers</p>
              </div>
              <div>
                <p className="font-bold">{user.following}</p>
                <p>Following</p>
              </div>
              <div>
                <p className="font-bold">{user.public_repos}</p>
                <p>Repos</p>
              </div>
            </div>

            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}