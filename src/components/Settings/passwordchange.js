import React from "react";

const PasswordChange = () => {
  return (
    <>
      <div className="password-settings">
        <h1>Jelszó csere</h1>
        <form>
          <div className="input-group">
            <label>Régi jelszó</label>
            <input name="oldpassword" type="password" />
          </div>
          <div className="input-group">
            <label>Új jelszó</label>
            <input name="newpassword" type="password" />
          </div>
          <div className="input-group">
            <label>Új jelszó újra</label>
            <input name="newpasswordc" type="password" />
          </div>
          <input type="submit" value="Mentés" />
        </form>
      </div>
    </>
  );
};

export default PasswordChange;
