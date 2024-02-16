import { useState } from "react";

// components
import Dropdown from "./components/Dropdown";

function App() {
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
    <Dropdown
      options={options}
      value={selectedOption}
      onChange={handleSelect}
    />
  );
}

export default App;
