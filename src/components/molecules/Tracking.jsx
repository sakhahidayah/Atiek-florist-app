import React from "react";
import Circle from "../../assets/Ellipse1.png";
import Line from "../../assets/Line3.png";
import TruckMini from "../../assets/mdi_truck_mini.png";
import Alamat from "../../assets/bx_map.png";
const Tracking = () => {
  return (
    <>
      <div className="w-5 h-5 md:w-20 md:h-20   bg-cover bg-center flex flex-col relative  " style={{ backgroundImage: `url(${Circle})` }}>
        <p className="text-xs font-medium font-serif absolute top-8 md:top-24 md:left-4">Pesanan Diterima</p>
      </div>
      <div className="w-20 md:w-60 h-1 bg-cover bg-center" style={{ backgroundImage: `url(${Line})` }}></div>
      <div className="w-5 h-5 md:w-20 md:h-20   bg-cover bg-center flex flex-col relative  " style={{ backgroundImage: `url(${Circle})` }}>
        <p className="text-xs font-medium font-serif absolute top-8 md:top-24 md:left-4">Pesanan Diproses</p>
      </div>
      <div className="w-20 md:w-60 h-1 bg-cover bg-center" style={{ backgroundImage: `url(${Line})` }}></div>
      <div className="w-5 h-5  md:w-20 md:h-20   bg-cover bg-center flex flex-col relative " style={{ backgroundImage: `url(${TruckMini})` }}>
        <p className="text-xs font-medium font-serif absolute top-8 md:top-24 md:left-4">Pesanan Diantar</p>
      </div>
      <div className="w-20 md:w-60 h-1 bg-cover bg-center" style={{ backgroundImage: `url(${Line})` }}></div>
      <div className="w-5 h-5  md:w-20 md:h-20   bg-cover bg-center flex flex-col relative " style={{ backgroundImage: `url(${Alamat})` }}>
        <p className="text-xs font-medium font-serif absolute top-8 md:top-24 md:left-4">Pesanan Diterima</p>
      </div>
    </>
  );
};

export default Tracking;
