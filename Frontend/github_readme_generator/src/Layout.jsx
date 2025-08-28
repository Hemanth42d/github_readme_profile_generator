import Footer from "./components/Footer";
import MainComponentLayout from "./components/MainComponent/MainComponentLayout";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <div className="p-5 flex flex-col gap-2 relative">
        <div className="max-h-[10%]">
          <Navbar />
        </div>
        <div className="max-h-[78%] p-3">
          <MainComponentLayout />
        </div>
        <div className="max-h-[10%] fixed bottom-5 w-[90%]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
