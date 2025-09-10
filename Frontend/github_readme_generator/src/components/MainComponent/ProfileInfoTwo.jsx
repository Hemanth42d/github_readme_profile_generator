import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import InputComponent from "../Inputs/InputComponent";
import { useUserData } from "../../context/UserDataContext";

const ProfileInfoTwo = () => {
  const navigate = useNavigate();

  const { userData, updateField } = useUserData();

  const handleOnSubmit = () => {
    console.log("Procced to next step...");
    navigate("/step3");
  };

  return (
    <>
      <div className="p-2">
        <div>
          <p className="text-xl font-bold my-2">Section - 2</p>
          <p className="text-lg text-gray-400">Social Links</p>
        </div>
        <div className="my-2 py-2">
          <label htmlFor="leetcode">LeetCode Url : </label>
          <InputComponent
            id={"leetcode"}
            type={"text"}
            placeholder={"Leetcode url...."}
            value={userData.leetcode || ""}
            onChange={(value) => updateField("leetcode", value)}
          />
          <label htmlFor="twitter">X Url : </label>
          <InputComponent
            id={"twitter"}
            type={"text"}
            placeholder={"x (twitter) url...."}
            value={userData.twitter || ""}
            onChange={(value) => updateField("twitter", value)}
          />
          <label htmlFor="youtube">Youtube Url : </label>
          <InputComponent
            id={"Youtube"}
            type={"text"}
            placeholder={"Youtube url...."}
            value={userData.Youtube || ""}
            onChange={(value) => updateField("Youtube", value)}
          />
          <label htmlFor="dribble">Dribble Url : </label>
          <InputComponent
            id={"Dribble"}
            type={"text"}
            placeholder={"Dribble url...."}
            value={userData.Dribble || ""}
            onChange={(value) => updateField("Dribble", value)}
          />
          <label htmlFor="devTo">Dev To Url : </label>
          <InputComponent
            id={"devTo"}
            type={"text"}
            placeholder={"Dev To url...."}
            value={userData.devTo || ""}
            onChange={(value) => updateField("devTo", value)}
          />
          <Button value={"Next"} handleOnSubmit={handleOnSubmit} />
        </div>
      </div>
    </>
  );
};

export default ProfileInfoTwo;
