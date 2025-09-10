import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import InputComponent from "../Inputs/InputComponent";
import { useUserData } from "../../context/UserDataContext";

const ProfileInfoOne = () => {
  const navigate = useNavigate();
  const { userData, updateField } = useUserData();

  const handleOnSubmit = () => {
    console.log("Proceed to next step....");
    navigate("/step2");
  };

  return (
    <>
      <div className="p-2">
        <div>
          <p className="text-xl font-bold">Section - 1</p>
          <p className="text-lg text-gray-500">Enter your Basic Information</p>
        </div>
        <div className="my-2 py-2">
          <label htmlFor="fullName" className="py-2">
            Full Name :{" "}
          </label>
          <InputComponent
            id={"fullName"}
            type={"text"}
            placeholder={"Enter Your Full Name"}
            value={userData.fullName || ""}
            onChange={(value) => updateField("fullName", value)}
          />
          <label htmlFor="iAm" className="py-2">
            I am a :{" "}
          </label>
          <InputComponent
            id={"iAm"}
            type={"text"}
            placeholder={"I am .... (ex : student, Employee etc... ) "}
            value={userData.iAm || ""}
            onChange={(value) => updateField("iAm", value)}
          />
          <label htmlFor="workingOn" className="py-2">
            currently Working On :{" "}
          </label>
          <InputComponent
            id={"working"}
            type={"text"}
            placeholder={"Currently Working on.."}
            value={userData.working || ""}
            onChange={(value) => updateField("working", value)}
          />

          <Button value={"Next"} handleOnSubmit={handleOnSubmit} />
        </div>
      </div>
    </>
  );
};

export default ProfileInfoOne;
