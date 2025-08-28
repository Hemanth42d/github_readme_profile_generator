import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-700 flex flex-col justify-between items-center h-full w-full p-2 rounded-md">
        <p className="text-sm">Developed by M V Hemanth</p>
        <p className="flex items-center gap-5 mt-2">
          <span>
            <Link className="text-sm text-blue-500 underline">Github Link</Link>
          </span>
          <span>
            <Link className="text-sm text-blue-500 underline">Contribute</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
