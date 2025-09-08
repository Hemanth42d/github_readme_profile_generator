import { useNavigate } from "react-router-dom";
import Button from "./Button/Button";

const Templates = ({ display, generate }) => {
  const navigate = useNavigate();
  const templateData = [
    {
      id: 1,
      number: 1,
      linkTo: "demoLink",
    },
    {
      id: 2,
      number: 2,
      linkTo: "demoLink",
    },
    {
      id: 3,
      number: 3,
      linkTo: "demoLink",
    },
    {
      id: 4,
      number: 4,
      linkTo: "demoLink",
    },
  ];

  const handleOnSubmit = () => {
    console.log("Proceed to next step...");
    navigate("/copy-readme");
  };

  return (
    <>
      <div className="bg-gray-900 p-3 rounded-lg my-3">
        <div>{display || "Preview"} Template</div>
        <div className="grid grid-cols-2 gap-3 mt-5">
          {templateData.map((template) => {
            return (
              <span
                key={template.id}
                className="border-1 rounded-lg border-gray-600 py-3 flex justify-center items-center"
              >
                {template.number}
              </span>
            );
          })}
        </div>
      </div>
      <div>
        {generate && (
          <Button value={"Generete Readme"} handleOnSubmit={handleOnSubmit} />
        )}
      </div>
    </>
  );
};

export default Templates;
