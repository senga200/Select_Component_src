import Select from "./react-library/src/Select";

function App() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="App">
      <Select options={options} />
    </div>
  );
}

export default App;
