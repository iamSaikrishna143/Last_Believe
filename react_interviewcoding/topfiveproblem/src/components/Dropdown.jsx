import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ label = "Select an option", options = [], onSelect }) => {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const buttonRef = useRef(null);
  const listRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        listRef.current &&
        !listRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
    }
    if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
    }
    if (e.key === "Enter" && highlightedIndex >= 0) {
      onSelect(options[highlightedIndex]);
      setOpen(false);
    }
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div style={{ position: "relative", width: "200px", color: "red" }}>
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={styles.button}
      >
        {label}
      </button>
      {open && (
        <ul
          ref={listRef}
          role="listbox"
          tabIndex="-1"
          style={styles.dropdown}
          onKeyDown={handleKeyDown}
        >
          {options.map((opt, i) => (
            <li
              key={opt}
              role="option"
              aria-selected={highlightedIndex === i}
              style={{
                ...styles.option,
                backgroundColor:
                  highlightedIndex === i ? "#eee" : "transparent",
              }}
              onMouseEnter={() => setHighlightedIndex(i)}
              onClick={() => {
                onSelect(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  button: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    cursor: "pointer",
    background: "#fff",
    textAlign: "left",
    color: "red",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    border: "1px solid #ccc",
    background: "#fff",
    maxHeight: "200px",
    overflowY: "auto",
    listStyle: "none",
    margin: 0,
    padding: 0,
    color: "red",
  },
  option: {
    padding: "10px",
    cursor: "pointer",
    color: "red",
  },
};

export default Dropdown;
