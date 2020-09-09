import React from "react";
import Description from "./description";
import Gallery from "./gallery";
import Rating from "./rating";

const ContentPage = (props) => {
  const { step, user } = props;
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
