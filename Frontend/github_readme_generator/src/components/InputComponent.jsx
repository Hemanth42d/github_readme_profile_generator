import { useState } from "react";

const InputComponent = ({ type, placeholder, value }) => {
  const [inputData, setInputData] = useState(value);

  return (
    <>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          className="border-1 border-gray-600 p-2 rounded-md outline-none w-full"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
    </>
  );
};

export default InputComponent;
