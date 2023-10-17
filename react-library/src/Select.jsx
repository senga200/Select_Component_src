import React from "react";

function Select({ children, options }) {
  return (
    <div className="selectComponent">
      <select>
        <option value="">Select in dropdown list</option>
        {children ||
          (options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )))}
      </select>
    </div>
  );
}

export default Select;
