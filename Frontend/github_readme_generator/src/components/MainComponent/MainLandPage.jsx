import Templates from "../Templates";
import InputsLayout from "./InputsLayout";
import image from "../../assets/github_logo.png";

const MainLandPage = () => {
  return (
    <div>
      <div>
        <Templates />
      </div>
      <div className="m-2">
        <div>
          <img src={image} alt="Github Logo" className="h-[100%]" />
        </div>
        <div>
          <p className="text-sm my-3">
            Want to generate some next level github readmes profile pages, just
            enter your github url and some personal info below here.
          </p>
        </div>
      </div>
      <div>
        <InputsLayout />
      </div>
    </div>
  );
};

export default MainLandPage;
