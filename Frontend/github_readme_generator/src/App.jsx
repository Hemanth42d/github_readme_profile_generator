import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import MainLandPage from "./components/MainComponent/MainLandPage";
import ProfileInfoOne from "./components/MainComponent/ProfileInfoOne";
import ProfileInfoTwo from "./components/MainComponent/ProfileInfoTwo";
import ProfileInfoThree from "./components/MainComponent/ProfileInfoThree";
import ProfileInfoFour from "./components/MainComponent/ProfileInfoFour";
import Templates from "./components/Templates";
import CopyReadme from "./components/MainComponent/CopyReadme";
import { UserDataProvider } from "./context/UserDataContext";

function App() {
  return (
    <UserDataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainLandPage />} />
          <Route path="step1" element={<ProfileInfoOne />} />
          <Route path="step2" element={<ProfileInfoTwo />} />
          <Route path="step3" element={<ProfileInfoThree />} />
          <Route path="step4" element={<ProfileInfoFour />} />
          <Route
            path="choose-template"
            element={<Templates display={"Choose"} generate={true} />}
          />
          <Route path="copy-readme" element={<CopyReadme />} />
        </Route>
      </Routes>
    </UserDataProvider>
  );
}

export default App;
