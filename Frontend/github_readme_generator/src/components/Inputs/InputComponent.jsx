const InputComponent = ({ type, placeholder, value, onChange, id }) => {
  return (
    <>
      <div>
        <input
          type={type}
          id={id || ""}
          placeholder={placeholder}
          className="border-1 border-gray-600 p-2 rounded-md outline-none w-full my-2"
          value={value || ""}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default InputComponent;
