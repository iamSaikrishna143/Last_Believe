import React, { useState } from "react";

const items = [
  {
    title: "Section 1",
    content: "Content for section 1",
  },
  {
    title: "Section 2",
    content: "Content for section 2",
  },
  {
    title: "Section 3",
    content: "Content for section 3",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div key={index} style={styles.item}>
            <button
              style={styles.header}
              aria-expanded={isOpen}
              aria-controls={`section-${index}`}
              id={`accordion-${index}`}
              onClick={() => toggleItem(index)}
            >
              {item.title}
            </button>
            {isOpen && (
              <div
                id={`section-${index}`}
                role="region"
                aria-labelledby={`accordion-${index}`}
                style={styles.content}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  item: {
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "10px",
    color: "red",

  },
  header: {
    width: "100%",
    textAlign: "left",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    background: "#f9f9f9",
    border: "none",
    color: "red",

  },
  content: {
    padding: "10px",
    color: "red",

    background: "#fff",
  },
};

export default Accordion;
