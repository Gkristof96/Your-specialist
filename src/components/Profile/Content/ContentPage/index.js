import React from "react";
import Description from "./Description";
import Gallery from "./Gallery/gallery";
import Rating from "./Rating";

const ContentPage = ({ step, user }) => {
  switch (step) {
    case 1:
      return <Description bio={user.bio} />;
    case 2:
      return <Gallery gallery={user.gallery} />;
    case 3:
      return <Rating user={user} />;
    default:
      break;
  }
};

export default ContentPage;
