import React from "react";
import AutoSearch from "../../components/autoinput";

const Offer = () => {
  return (
    <>
      <section className="offer">
        <div className="offer__card">
          <h1>Árajánlat</h1>
          <form onSubmit="">
            <div className="input-group">
              <label>Név</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Email cím</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Település</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Település</label>
              <AutoSearch />
            </div>
            <div className="input-group">
              <label>Munka leírás</label>
              <textarea />
            </div>
            <input type="submit" value="Küldés" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Offer;
