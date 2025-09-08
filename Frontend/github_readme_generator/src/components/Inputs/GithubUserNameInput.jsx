import Button from "../Button/Button";
import InputComponent from "./InputComponent";
import { useNavigate } from "react-router-dom";

const GithubUserNameInput = () => {
  const navigate = useNavigate();
  const handleOnSubmit = () => {
    console.log("Proceed to next step....");
    navigate("/step1");
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
