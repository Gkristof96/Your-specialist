import React, { useState } from "react";
import StarRate from "../starrate";

const Rating = (props) => {
  const [rate, setRate] = useState();
  return (
    <>
      <div>
        <h1>Értékelés</h1>
        <form>
          <div className="input-group">
            <label>Név</label>
            <input name="name" type="text" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input name="email" type="text" />
          </div>
          <StarRate rating={rate} setRating={setRate} />
          <div className="input-group">
            <label>Leírás</label>
            <textarea name="name" />
          </div>
          <input type="submit" value="Küldés" />
        </form>
      </div>
    </>
  );
};

export default Rating;
