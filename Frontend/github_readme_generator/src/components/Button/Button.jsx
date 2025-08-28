const Button = ({ value, handleOnSubmit }) => {
  return (
    <>
      <div className="mt-2 mb-1 text-center w-full">
        <button
          onClick={handleOnSubmit}
          className="bg-blue-500 hover:bg-blue-700 rounded-md p-2 text-sm w-full"
        >
          {value}
        </button>
      </div>
    </>
  );
};

export default Button;
