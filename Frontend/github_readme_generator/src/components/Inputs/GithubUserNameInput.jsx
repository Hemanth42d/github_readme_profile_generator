import Button from "../Button/Button";
import InputComponent from "./InputComponent";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";

const GithubUserNameInput = () => {
  const navigate = useNavigate();
  const { userData, updateField } = useUserData();

  const handleOnSubmit = () => {
    if (userData.githubUsername.trim()) {
      console.log("Proceed to next step....");
      navigate("/step1");
    } else {
      alert("Please enter a GitHub username");
    }
  };

  return (
    <>
      <div>
        <InputComponent
          type={"text"}
          placeholder={"Enter Github UserName"}
          value={userData.githubUsername}
          onChange={(value) => updateField("githubUsername", value)}
        />
        <div className="w-full">
          <Button value={"Submit"} handleOnSubmit={handleOnSubmit} />
        </div>
      </div>
    </>
  );
};

export default GithubUserNameInput;
