import React from "react";

const HeaderForm = ({ title, linetext }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-[#C7A700]">{title}</h1>
      <h4 className="text-xs font-light">{linetext}</h4>
    </>
  );
};

export default HeaderForm;
