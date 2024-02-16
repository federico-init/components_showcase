import { useState } from "react";

import { GoChevronDown, GoChevronUp } from "react-icons/go";

const Dropdown = ({ options, value, onChange }) => {
  // defines if dropdown is open
  const [isOpen, setIsOpen] = useState(false);

  // as user clicks an option the dropdown closes and selectedOption state gets updated
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => (
    <div
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      onClick={() => handleOptionClick(option)}
      key={option.value}
    >
      {option.label}
    </div>
  ));

  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {value?.label || "Select..."}
        {isOpen ? <GoChevronUp /> : <GoChevronDown />}
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
