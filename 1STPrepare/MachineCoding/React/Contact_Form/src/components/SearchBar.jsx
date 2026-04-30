function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      className="border p-2 w-full mb-4 rounded"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;