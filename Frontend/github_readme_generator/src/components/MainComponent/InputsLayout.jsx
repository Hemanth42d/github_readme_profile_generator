import GithubUserNameInput from "../Inputs/GithubUserNameInput";

const InputsLayout = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-gray-900 p-3 rounded-md">
        <GithubUserNameInput />
      </div>
      <div className="bg-gray-900 p-3 rounded-md"></div>
    </div>
  );
};

export default InputsLayout;
