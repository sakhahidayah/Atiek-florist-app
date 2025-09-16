import React from "react";

const HeaderFormFormulir = () => {
  return (
    <>
      <div className="flex flex-row gap-5 w-full justify-center items-center px-10 ">
        <button className="px-3 w-full py-1 rounded-full  bg-[#C7A700] text-white font-semibold text-sm">Perusahaan</button>
        <button className="px-7 w-full py-1 rounded-full border-[#C7A700] border text-[#C7A700] font-semibold text-sm">Pribadi</button>
      </div>
    </>
  );
};

export default HeaderFormFormulir;
