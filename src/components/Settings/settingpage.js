import React from "react";

import PersonalSettings from "./personalsettings";
import ProviderSettings from "./professionsettings";
import PasswordChange from "./passwordchange";
import GalleryUpload from "./galleryupload";

const SettingPage = (props) => {
  const { step, user } = props;

  switch (step) {
    case 1:
      return <PersonalSettings user={user} />;
    case 2:
      return <ProviderSettings user={user} />;
    case 3:
      return <PasswordChange user={user} />;
    case 4:
      return <GalleryUpload user={user} />;
    default:
  }
};

export default SettingPage;
