import React from "react";
import Karangan1 from "../../assets/karangan_bunga/1.png";
import Karangan2 from "../../assets/karangan_bunga/2.png";
import Karangan3 from "../../assets/karangan_bunga/3.png";
import notFoundImg from "../../assets/karangan_bunga/notfoundImage.png";
const ItemsCatalog = () => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="w-40 md:w-60 md:h-60 bg-cover bg-center rounded-lg h-40 md:w-" style={{ backgroundImage: `url(${Karangan1})` }}></div>
        <p>Karangan Bunga ELite</p>
        <p>Rp.500.000</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-40 md:w-60 md:h-60 bg-cover bg-center rounded-lg h-40" style={{ backgroundImage: `url(${Karangan2})` }}></div>
        <p>Karangan Bunga Medium</p>
        <p>Rp.350.000</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-40 md:w-60 md:h-60 bg-cover bg-center rounded-lg h-40" style={{ backgroundImage: `url(${Karangan3})` }}></div>
        <p>Karangan Bunga Low</p>
        <p>Rp.100.000</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-40 md:w-60 md:h-60 bg-cover bg-center rounded-lg h-40" style={{ backgroundImage: `url(${notFoundImg})` }}></div>
        <p>Karangan Bunga ELite</p>
        <p>Rp.500.000</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-40 md:w-60 md:h-60 bg-cover bg-center rounded-lg h-40" style={{ backgroundImage: `url(${notFoundImg})` }}></div>
        <p>Karangan Bunga ELite</p>
        <p>Rp.500.000</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-40 md:w-60 md:h-60 bg-cover bg-center rounded-lg h-40" style={{ backgroundImage: `url(${notFoundImg})` }}></div>
        <p>Karangan Bunga ELite</p>
        <p>Rp.500.000</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-40 md:w-60 md:h-60 bg-cover bg-center rounded-lg h-40" style={{ backgroundImage: `url(${notFoundImg})` }}></div>
        <p>Karangan Bunga ELite</p>
        <p>Rp.500.000</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-40 md:w-60 md:h-60 bg-cover bg-center rounded-lg h-40" style={{ backgroundImage: `url(${notFoundImg})` }}></div>
        <p>Karangan Bunga ELite</p>
        <p>Rp.500.000</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-40 md:w-60 md:h-60 bg-cover bg-center rounded-lg h-40" style={{ backgroundImage: `url(${notFoundImg})` }}></div>
        <p>Karangan Bunga ELite</p>
        <p>Rp.500.000</p>
      </div>
    </>
  );
};

export default ItemsCatalog;
