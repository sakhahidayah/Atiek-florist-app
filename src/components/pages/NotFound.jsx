import React from "react";
import Navbar from "../templates/Navbar";
import { WarningIcon } from "@phosphor-icons/react";
const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-full flex justify-center items-center">
        <div className="mt-10 rounded-lg shadow-lg border-2 p-10 flex flex-col justify-center items-center gap-1">
          <WarningIcon size={50} className="text-[#C7A700] " />
          <h1 className="font-semibold text-xl md:text-2xl font-serif">Not Found Page</h1>
          <p className="font-light text-lg md:text-xl">The Page doesn't exist</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
