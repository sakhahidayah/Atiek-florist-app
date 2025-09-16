import React from "react";

const InputForm = ({ labelName, labelPassword }) => {
  return (
    <>
      <div className="flex flex-col gap-3 w-full">
        <input className="px-3 py-2 font-normal rounded-md border border-[#C7A700] focus:border-[#C7A700] focus:ring-2 outline-none focus:ring-[#c7a700] text-xs" type="text" placeholder={labelName} />
        <input className="px-3 py-2 font-normal rounded-md border border-[#C7A700] focus:border-[#C7A700] focus:ring-2 outline-none focus:ring-[#c7a700] text-xs" type="password" placeholder={labelPassword} />
      </div>
    </>
  );
};

export default InputForm;
