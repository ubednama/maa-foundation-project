import React, { useState } from "react";

const InputText = ({ placeholder, name, className = "", value }) => {
  const [val, setVal] = useState("");
  return (
    <>
      <input
        type="text"
        className={`bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 lg:p-4 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 ${className}`}
        placeholder={placeholder}
        name={name}
        id={name}
        onChange={(e) => setVal(e.target.value)}
        value={val || value}
        aria-label={placeholder}
      />
    </>
  );
};

export default InputText;