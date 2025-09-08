import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import InputComponent from "../Inputs/InputComponent";

const ProfileInfoTwo = () => {
  const navigate = useNavigate();

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
            type={"text"}
            placeholder={"Leetcode url...."}
            value={""}
            id={"leetcode"}
          />
          <label htmlFor="twitter">X Url : </label>
          <InputComponent
            type={"text"}
            placeholder={"x (twitter) url...."}
            value={""}
            id={"twitter"}
          />
          <label htmlFor="youtube">Youtube Url : </label>
          <InputComponent
            type={"text"}
            placeholder={"youtube url...."}
            value={""}
            id={"youtube"}
          />
          <label htmlFor="dribble">Dribble Url : </label>
          <InputComponent
            type={"text"}
            placeholder={"Dribble url...."}
            value={""}
            id={"dribble"}
          />
          <label htmlFor="devTo">Dev To Url : </label>
          <InputComponent
            type={"text"}
            placeholder={"devTo url...."}
            value={""}
            id={"devTo"}
          />
          <Button value={"Next"} handleOnSubmit={handleOnSubmit} />
        </div>
      </div>
    </>
  );
};

export default ProfileInfoTwo;
