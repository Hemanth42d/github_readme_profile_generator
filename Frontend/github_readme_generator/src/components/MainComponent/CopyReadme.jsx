import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const CopyReadme = () => {
  const navigate = useNavigate();
  const handleOnSubmit = () => {
    console.log("Go Back...");
    navigate("/step4");
  };
  return (
    <>
      <div className="py-2">
        <div>
          <p className="text-lg font-bold my-2">
            Download Readme file or Copy Readme file
          </p>
        </div>
        <div>
          <div className="min-h-[60vh] rounded-md bg-gray-600"></div>
        </div>
        <div>
          <Button value={"Back"} handleOnSubmit={handleOnSubmit} />
        </div>
      </div>
    </>
  );
};

export default CopyReadme;
