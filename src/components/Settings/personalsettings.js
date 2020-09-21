import React from "react";

const PersonalSettings = (props) => {
  return (
    <>
      <div className="personal-settings">
        <h1>Személyes beállítások</h1>
        <form>
          <div className="input-group">
            <label>Profilkép</label>
            <input name="profile" type="file" />
          </div>
          <div className="input-group">
            <label>Keresztnév</label>
            <input name="firstname" type="text" />
          </div>
          <div className="input-group">
            <label>Vezetéknév</label>
            <input name="lastname" type="text" />
          </div>
          <div className="input-group">
            <label>Város</label>
            <input name="city" type="text" />
          </div>
          <div className="input-group">
            <label>Telefonszám</label>
            <input name="tel" type="text" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input name="email" type="email" />
          </div>
          <div className="input-group">
            <label>Leírás</label>
            <textarea name="description" />
          </div>
          <input className="btn" type="submit" value="Mentés" />
        </form>
      </div>
    </>
  );
};

export default PersonalSettings;
