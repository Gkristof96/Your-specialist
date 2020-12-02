import React from "react";
import PersonalSettings from "./PersonalSettings";
import ProviderSettings from "./ProfessionSettings";
import PasswordChange from "./PasswordSettings";
import GalleryUpload from "./GallerySettings";

const SettingPage = ({ step, user, setUser }) => {
  switch (step) {
    case 1:
      return <PersonalSettings setUser={setUser} user={user} />;
    case 2:
      return (
        <ProviderSettings
          setUser={setUser}
          user={user}
          professionList={user.professions}
        />
      );
    case 3:
      return <PasswordChange setUser={setUser} user={user} />;
    case 4:
      return (
        <GalleryUpload setUser={setUser} gallery={user.gallery} user={user} />
      );
    default:
  }
};

export default SettingPage;