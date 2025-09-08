import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="p-5 flex flex-col gap-2 relative">
        <div className="max-h-[10%]">
          <Navbar />
        </div>
        <div className="max-h-[88%] p-3">
          <Outlet />
        </div>
        <div className="max-h-[10%] fixed bottom-5 w-[90%]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
