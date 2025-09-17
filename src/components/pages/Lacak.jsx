import React from "react";
import Navbar from "../templates/Navbar";
import HeaderLacak from "../molecules/HeaderLacak";
import Tracking from "../molecules/Tracking";
const Lacak = () => {
  return (
    <>
      <div className="w-screen h-full">
        <Navbar />
        <div className="w-full flex flex-col justify-center items-center mt-3 md:mt-10 p-4">
          <HeaderLacak />
          <div className="mt-10 w-full  md:p-0  flex flex-row gap-2 items-center justify-center ">
            <Tracking />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lacak;
