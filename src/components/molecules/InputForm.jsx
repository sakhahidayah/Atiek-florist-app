import React from "react";

const InputForm = ({ labelName, labelPassword }) => {
  return (
    <>
      <div className="flex flex-col gap-3 w-full">
        <input className="px-3 py-2 font-normal rounded-md border border-[#C7A700] text-xs" type="text" placeholder={labelName} />
        <input className="px-3 py-2 font-normal rounded-md border border-[#C7A700] text-xs" type="text" placeholder={labelPassword} />
      </div>
    </>
  );
};

export default InputForm;
