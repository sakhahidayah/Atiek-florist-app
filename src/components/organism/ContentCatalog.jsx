import React from "react";
import TitleCatalog from "../molecules/TitleCatalog";
import Discount from "../molecules/Discount";
import NavbarItems from "../molecules/NavbarItems";
import ItemsCatalog from "../molecules/ItemsCatalog";
const ContentCatalog = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center p-5 md:p-14">
        <TitleCatalog />
        <Discount />
        <NavbarItems />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
          <ItemsCatalog />
        </div>
      </div>
    </>
  );
};

export default ContentCatalog;
