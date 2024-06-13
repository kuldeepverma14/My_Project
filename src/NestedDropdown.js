import React, { useState } from 'react';
import './App.css'; // Make sure to import your CSS file

export default function NestedDropdown() {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const subOptions = {
    "option1": ["SubOption 1.1", "SubOption 1.2", "SubOption 1.3", "SubOption 1.4"],
    "option2": ["SubOption 2.1", "SubOption 2.2", "SubOption 2.3", "SubOption 2.4"],
    "option3": ["SubOption 3.1", "SubOption 3.2", "SubOption 3.3", "SubOption 3.4"],
    "option4": ["SubOption 4.1", "SubOption 4.2", "SubOption 4.3", "SubOption 4.4"]
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const value = event.target.value;
    console.log("Selected option:", value);
    setSelectedOption(value);
  };

  const renderSubOptions = () => {
    if (selectedOption && subOptions[selectedOption]) {
      return subOptions[selectedOption].map((subOption, subIndex) => (
        <option key={subIndex} value={subOption.toLowerCase().replace(/\s+/g, '')}>
          {subOption}
        </option>
      ));
    }
    return <option value="">Select SubOption</option>;
  };

  return (
    <div className="App">
      <select onChange={handleOptionChange}>
        <option value="">Select</option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option.toLowerCase().replace(/\s+/g, '')}
          >
            {option}
          </option>
        ))}
      </select>

      {selectedOption && (
        <select>
          <option value="">Select SubOption</option>
          {renderSubOptions()}
        </select>
      )}
    </div>
  );
}
