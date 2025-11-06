import React, { useState, useEffect } from "react";

const ScrollPositionList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchItems = async (pageNum) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${(pageNum - 1) * 10}`
      );
      const data = await res.json();
      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setItems((prev) => [...prev, ...data.products]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(page);
  }, [page]);

  const handleScroll = () => {
    if (loading || !hasMore) return;
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div style={styles.container}>
      <h2>Infinite Scroll (Scroll Position)</h2>
      <ul style={styles.list}>
        {items.map((item) => (
          <li key={item.id} style={styles.item}>
            {item.title}
          </li>
        ))}
      </ul>
      {loading && <p style={styles.loading}>Loading...</p>}
      {!hasMore && <p style={styles.end}>No more items</p>}
    </div>
  );
};

const styles = {
  container: { maxWidth: "400px", margin: "20px auto", fontFamily: "sans-serif" },
  list: { listStyle: "none", padding: 0, color: "red" },
  item: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    background: "#f9f9f9",
    color: "red",
  },
  loading: { textAlign: "center" },
  end: { textAlign: "center", color: "gray" },
};

export default ScrollPositionList;
