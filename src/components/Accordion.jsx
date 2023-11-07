import { useState } from "react";

// React icons
import { GoChevronDown, GoChevronRight } from "react-icons/go";

const Accordion = ({ items }) => {
  // this state refers to the expanded section's id
  const [expandedIndex, setExpandedIndex] = useState(null);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const chevronIcon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronRight />}</span>
    );

    return (
      <div key={item.id}>
        <div
          onClick={
            isExpanded
              ? () => setExpandedIndex(null)
              : () => setExpandedIndex(index)
          }
        >
          {item.label}
          {chevronIcon}
        </div>

        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
