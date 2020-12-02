import React from "react";
import { TiDelete } from "react-icons/ti";

const ProfessionBadge = ({
  profession,
  settings,
  professions,
  setProfessions,
  }) => {
  // függvény az adott badge törlésére
  const handleDelete = () => {
    setProfessions(professions.filter((el) => el !== profession));
    console.log(professions);
  };

  return (
    <>
      <div className="badge">
        {profession}
        {settings ? (
          <TiDelete size="25" onClick={() => handleDelete()} />
        ) : null}
      </div>
    </>
  );
};

export default ProfessionBadge;