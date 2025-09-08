import { useState } from "react";

const InputComponent = ({ type, placeholder, value, id }) => {
  const [inputData, setInputData] = useState(value);

  return (
    <>
      <div>
        <input
          type={type}
          id={id || ""}
          placeholder={placeholder}
          className="border-1 border-gray-600 p-2 rounded-md outline-none w-full my-2"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
    </>
  );
};

export default InputComponent;
