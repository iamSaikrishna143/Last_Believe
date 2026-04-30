import { useEffect, useState } from "react";

const API_KEY = "cd4c299762a541219c17109aa4e8d29c";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);

    try {
      let url = "";

      if (search) {
        url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`;
      } else {
        url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;
      }

      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.articles || []);
    } catch (err) {
      console.error("Error fetching news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6">
        📰 News Reader
      </h1>

      {/* Search */}
      <div className="flex gap-2 max-w-xl mx-auto mb-4">
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
        />
        <button
          onClick={fetchNews}
          className="bg-blue-600 text-white px-4 rounded-lg"
        >
          Search
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {["general", "business", "technology", "sports", "health"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSearch("");
              setCategory(cat);
            }}
            className="px-4 py-1 bg-gray-800 text-white rounded-full text-sm"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && <p className="text-center">Loading...</p>}

      {/* News Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {articles.map((news, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {news.urlToImage && (
              <img
                src={news.urlToImage}
                alt="news"
                className="w-full h-40 object-cover"
              />
            )}

            <div className="p-4">
              <h2 className="font-semibold text-lg">
                {news.title}
              </h2>

              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {news.description}
              </p>

              <a
                href={news.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-blue-600 font-medium"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}