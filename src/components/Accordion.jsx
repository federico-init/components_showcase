import { useState } from "react";

// React icons
import { GoChevronDown, GoChevronRight } from "react-icons/go";

const Accordion = ({ items }) => {
  // this state refers to the expanded section's id
  const [expandedIndex, setExpandedIndex] = useState(null);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const chevronIcon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={
            isExpanded
              ? () => setExpandedIndex(null)
              : () => setExpandedIndex(index)
          }
        >
          {item.label}
          {chevronIcon}
        </div>

        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
