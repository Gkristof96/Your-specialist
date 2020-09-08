import React from "react";
import Description from "./description";
import Gallery from "./gallery";
import Rating from "./rating";

const ContentPage = (props) => {
  const { step, user } = props;
  switch (step) {
    case 1:
      return <Description user={user} />;
    case 2:
      return <Gallery user={user} />;
    case 3:
      return <Rating user={user} />;
    default:
      break;
  }
};

export default ContentPage;
