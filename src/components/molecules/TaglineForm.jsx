import React from "react";

const TaglineForm = ({ taglineText, taglineLink, link }) => {
  return (
    <>
      <div className="flex flex-row gap-2 justify-between w-full">
        <p className="text-[10px] font-extralight text-black ">{taglineText}</p>
        <a className="text-xs font-normal text-[#C7A700] hover:underline hover:underline-offset-2 " href={link}>
          {taglineLink}
        </a>
      </div>
    </>
  );
};

export default TaglineForm;
