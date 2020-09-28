import React from "react";

const PersonalSettings = ({ user, setUser }) => {
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
            <input value={user.firstname} name="firstname" type="text" />
          </div>
          <div className="input-group">
            <label>Vezetéknév</label>
            <input value={user.lastname} name="lastname" type="text" />
          </div>
          <div className="input-group">
            <label>Város</label>
            <input value={user.city} name="city" type="text" />
          </div>
          <div className="input-group">
            <label>Telefonszám</label>
            <input value={user.tel} name="tel" type="text" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input value={user.email} name="email" type="email" />
          </div>
          <div className="input-group">
            <label>Leírás</label>
            <textarea value={user.bio} name="description" />
          </div>
          <input className="btn" type="submit" value="Mentés" />
        </form>
      </div>
    </>
  );
};

export default PersonalSettings;
