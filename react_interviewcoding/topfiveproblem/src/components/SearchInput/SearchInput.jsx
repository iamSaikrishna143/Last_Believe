import React, { useState, useEffect } from "react";

// Debounce utility function
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler); // Cleanup
  }, [value, delay]);

  return debouncedValue;
};

const SearchWithSuggestions = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounce query by 500ms
  const debouncedQuery = useDebounce(query, 500);

  // Fetch API suggestions when debounced query changes
  useEffect(() => {
    if (!debouncedQuery) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        // Replace this with your real API endpoint
        const response = await fetch(
          `https://dummyjson.com/users/search?q=${debouncedQuery}`
        );
        const data = await response.json();

        // Assuming API returns an array of results
        setSuggestions(data.users || []);
      } catch (err) {
        console.error("Error fetching suggestions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [debouncedQuery]);

  return (
    <div style={styles.container}>
      <h2>Search Users</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />

      {loading && <p style={styles.loading}>Loading...</p>}

      <ul style={styles.suggestions}>
        {suggestions.map((item) => (
          <li key={item.id} style={styles.suggestionItem}>
            {item.firstName} {item.lastName} ({item.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles
const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    fontFamily: "sans-serif",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
  },
  loading: { fontSize: "14px", color: "gray" },
  suggestions: {
    listStyle: "none",
    padding: 0,
    border: "1px solid #ddd",
    borderRadius: "4px",
    maxHeight: "200px",
    overflowY: "auto",
  },
  suggestionItem: {
    padding: "8px",
    borderBottom: "1px solid #ddd",
    cursor: "pointer",
  },
};

export default SearchWithSuggestions;
