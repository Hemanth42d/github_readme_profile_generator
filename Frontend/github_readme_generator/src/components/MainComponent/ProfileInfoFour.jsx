import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import InputComponent from "../Inputs/InputComponent";
import { useUserData } from "../../context/UserDataContext";

const ProfileInfoFour = () => {
  const navigate = useNavigate();

  const { userData, updateField } = useUserData();

  const handleOnSubmit = () => {
    console.log("Generate Readme...");
    navigate("/choose-template");
  };
  return (
    <>
      <div className="p-2">
        <div>
          <p className="text-xl font-bold my-2">Section - 4</p>
          <p className="text-lg text-gray-400">Tech stack</p>
        </div>
        <div className="my-2 py-2">
          <label htmlFor="search">Tech Stack You Worked On : </label>
          <InputComponent
            id={"search"}
            type={"text"}
            placeholder={"Add Tech Stack you Worked on"}
            value={userData.techStack || ""}
            onChange={(value) => updateField("search", value)}
          />
          <Button value={"Add"} handleOnSubmit={handleOnSubmit} />
        </div>
        <div>
          <p className="my-1 py-1">Add Tech Stack.</p>
          <p className="min-h-[15vh]"></p>
        </div>
        <div>
          <Button value={"Generate Readme"} handleOnSubmit={handleOnSubmit} />
        </div>
      </div>
    </>
  );
};

export default ProfileInfoFour;
