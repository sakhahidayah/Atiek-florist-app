import FilterImg from "../../assets/mdi_filter.png";
import React from "react";

const NavbarItems = () => {
  return (
    <>
      <div className="flex flex-row mt-14 justify-around md:justify-start md:gap-8 items-center">
        <div className="flex flex-row gap-1 px-3 rounded-lg border-b-4 shadow-md items-center py-1 border">
          <img src={FilterImg} alt="" className="w-5 h-5" />
          <p className="font-bold font-serif text-md">Filter</p>
        </div>
        <button className="font-bold font-serif text-lg text-[#C7A700]">Bunga Papan</button>
        <button className="font-bold text-lg font-serif">Bouquet</button>
      </div>
    </>
  );
};

export default NavbarItems;
