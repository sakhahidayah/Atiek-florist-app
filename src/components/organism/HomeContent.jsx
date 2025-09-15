import React from "react";
import AtiekBackground from "../../assets/atiekflorist.jpg";
const HomeContent = () => {
  return (
    <div className="bg-cover relative h-[200px] md:h-[300px] flex  text-white justify-center items-center " style={{ backgroundImage: `url(${AtiekBackground})` }}>
      <div className="bg-black/65 inset-0 absolute"></div>
      <div className="flex flex-col gap-3 z-10 items-center">
        <p className="text-3xl font-extralight md:text-5xl ">ATIEK FLORIST</p>
        <p className="text-lg font-light md:text-xl">Every Flower Tells Your Story</p>
      </div>
    </div>
  );
};

export default HomeContent;
