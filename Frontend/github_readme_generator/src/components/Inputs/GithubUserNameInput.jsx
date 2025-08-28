import Button from "../Button/Button";
import InputComponent from "../InputComponent";

const GithubUserNameInput = () => {
  const handleOnSubmit = () => {
    console.log("working..");
  };

  return (
    <>
      <div>
        <InputComponent
          type={"text"}
          placeholder={"Enter Github UserName"}
          value={""}
        />
        <div className="w-full">
          <Button value={"Submit"} handleOnSubmit={handleOnSubmit} />
        </div>
      </div>
    </>
  );
};

export default GithubUserNameInput;
