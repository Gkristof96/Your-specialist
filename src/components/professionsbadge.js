import React from "react";
import { FaTools } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

const ProfessionBadge = ({
  profession,
  settings,
  professions,
  setProfessions,
}) => {
  const handleDelete = () => {
    setProfessions(professions.filter((el) => el !== profession));
    console.log(professions);
  };

  return (
    <>
      <div className="badge">
        <FaTools size="25" />
        {profession}
        {settings ? (
          <TiDelete size="25" onClick={() => handleDelete()} />
        ) : null}
      </div>
    </>
  );
};

export default ProfessionBadge;
