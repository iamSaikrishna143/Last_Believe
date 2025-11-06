import React, { useState, useEffect, useRef, useCallback } from "react";

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef(null);

  // Fetch paginated data
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
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Observe last element
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore]
  );

  // Fetch on page change
  useEffect(() => {
    fetchItems(page);
  }, [page]);

  return (
    <div style={styles.container}>
      <h2>Infinite Scroll (Intersection Observer)</h2>
      <ul style={styles.list}>
        {items.map((item, index) => {
          if (index === items.length - 1) {
            return (
              <li key={item.id} ref={lastElementRef} style={styles.item}>
                {item.title}
              </li>
            );
          }
          return (
            <li key={item.id} style={styles.item}>
              {item.title}
            </li>
          );
        })}
      </ul>
      {loading && <p style={styles.loading}>Loading...</p>}
      {!hasMore && <p style={styles.end}>No more items</p>}
    </div>
  );
};

// Styles
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

export default InfiniteScrollList;
