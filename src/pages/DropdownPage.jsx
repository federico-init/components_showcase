import { useState } from "react";

// components
import Dropdown from "./components/Dropdown";

const DropdownPage = () => {
  // contains selected dropdown option
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div className="flex">
      <Dropdown
        options={options}
        value={selectedOption}
        onChange={handleSelect}
      />
    </div>
  );
};

export default DropdownPage;
