import Select from "./react-library/src/Select";
import { useState } from "react";

function App() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="App">
      <Select
        options={options}
        value={selectedValue}
        onChange={handleSelectChange}
        id="mySelect"
        name="mySelect"
      />
    </div>
  );
}

export default App;
