import React, { useState, useMemo } from "react";

// Dummy Product Data
const productsData = [
  { id: 1, name: "iPhone 14", category: "Electronics", price: 800 },
  { id: 2, name: "Macbook Air", category: "Electronics", price: 1200 },
  { id: 3, name: "Shoes", category: "Fashion", price: 50 },
  { id: 4, name: "T-Shirt", category: "Fashion", price: 30 },
  { id: 5, name: "Dining Table", category: "Furniture", price: 300 },
  { id: 6, name: "Sofa", category: "Furniture", price: 500 },
];

// Categories (dynamic or static)
const categories = ["Electronics", "Fashion", "Furniture"];

const ProductFilterApp = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(1500); // Max price slider value

  // Handle category toggle
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Filtered Products (memoized for performance)
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const priceMatch = product.price <= priceRange;
      return categoryMatch && priceMatch;
    });
  }, [selectedCategories, priceRange]);

  return (
    <div style={styles.container}>
      {/* Sidebar Filter */}
      <aside style={styles.sidebar}>
        <h3>Filters</h3>

        {/* Category Filter */}
        <div style={styles.filterSection}>
          <h4>Category</h4>
          {categories.map((cat) => (
            <label key={cat} style={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
              />
              {cat}
            </label>
          ))}
        </div>

        {/* Price Filter */}
        <div style={styles.filterSection}>
          <h4>Max Price: ${priceRange}</h4>
          <input
            type="range"
            min="0"
            max="1500"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>
      </aside>

      {/* Product List */}
      <main style={styles.productList}>
        <h3>Products</h3>
        {filteredProducts.length > 0 ? (
          <ul style={styles.products}>
            {filteredProducts.map((product) => (
              <li key={product.id} style={styles.productCard}>
                <h4>{product.name}</h4>
                <p>{product.category}</p>
                <p>${product.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found.</p>
        )}
      </main>
    </div>
  );
};

// Basic Styles
const styles = {
  container: {
    display: "flex",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "250px",
    borderRight: "1px solid #ddd",
    paddingRight: "20px",
  },
  filterSection: {
    marginBottom: "20px",
  },
  checkboxLabel: {
    display: "block",
    marginBottom: "8px",
    cursor: "pointer",
  },
  productList: {
    flex: 1,
    paddingLeft: "20px",
  },
  products: {
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: "15px",
    padding: 0,
  },
  productCard: {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "6px",
    textAlign: "center",
    background: "#f9f9f9",
    color: "red",
  },
};

export default ProductFilterApp;
