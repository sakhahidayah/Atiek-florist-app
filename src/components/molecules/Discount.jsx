import React from "react";

const Discount = () => {
  return (
    <>
      <div className="self-center md:self-start border shadow-lg rounded-md flex flex-row gap-3 w-max p-4">
        <div className="flex flex-col gap-1 items-center">
          <p className="font-bold text-xl">Up To</p>
          <p className="font-bold text-2xl text-[#C7A700] italic">50%</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="font-bold text-lg ">Khusus Bulan Mei 2025</p>
          <p className="font-light text-md">Berlaku bagi member aktif </p>
        </div>
      </div>
    </>
  );
};

export default Discount;
