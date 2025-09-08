import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import InputComponent from "../Inputs/InputComponent";

const ProfileInfoThree = () => {
  const navigate = useNavigate();
  const handleOnSubmit = () => {
    console.log("Proccedd to next step...");
    navigate("/step4");
  };

  return (
    <>
      <div className="p-2">
        <div>
          <p className="text-xl font-bold my-2">Section - 3</p>
          <p className="text-lg text-gray-400">Skills Section</p>
        </div>
        <div className="my-2 py-2">
          <label htmlFor="search">Search for your Skills : </label>
          <InputComponent
            type={"text"}
            value={""}
            placeholder={"Search for the skill you know"}
            id={"search"}
          />
          <Button value={"Add"} handleOnSubmit={handleOnSubmit} />
        </div>
        <div>
          <p className="my-1 py-1">Skills You Added.</p>
          <p className="min-h-[15vh]"></p>
        </div>
        <div>
          <Button value={"Next"} handleOnSubmit={handleOnSubmit} />
        </div>
      </div>
    </>
  );
};

export default ProfileInfoThree;
