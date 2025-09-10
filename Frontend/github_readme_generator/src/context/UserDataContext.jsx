import { createContext, useContext, useState } from "react";

const UserDataContext = createContext();

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }
  return context;
};

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    githubUsername: "",

    fullName: "",
    iAm: "",
    working: "",

    learning: "",
    askAbout: "",
    funFact: "",

    languages: "",
    techStack: "",

    linkedin: "",
    twitter: "",
    portfolio: "",
    Youtube: "",
    Dribble: "",
    devTo: "",

    profileViews: "",
    followers: "",
    repositories: "",
  });

  // const [currentStep, setCurrentStep] = useState(0);

  const updateField = (field, value) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateFields = (fields) => {
    setUserData((prev) => ({
      ...prev,
      ...fields,
    }));
  };

  const resetData = () => {
    setUserData({
      githubUsername: "",
      fullName: "",
      iAm: "",
      working: "",
      learning: "",
      askAbout: "",
      funFact: "",
      languages: "",
      frameworks: "",
      tools: "",
      databases: "",
      linkedin: "",
      twitter: "",
      portfolio: "",
      email: "",
      profileViews: "",
      followers: "",
      repositories: "",
    });
  };

  const value = {
    userData,
    // currentStep,
    updateField,
    updateFields,
    // nextStep,
    // previousStep,
    resetData,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
