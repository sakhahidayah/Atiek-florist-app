import React from "react";
import Navbar from "../templates/Navbar";
import FormulirImg from "../../assets/formulir.jpg";
const Formulir = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-full flex ">
        <div className="w-full h-[200px] md:h-[300px] relative bg-center bg-cover flex flex-col justify-top  items-center" style={{ backgroundImage: `url(${FormulirImg})` }}>
          <div className="bg-black/65 inset-0 absolute"></div>
          <div className="flex flex-col gap-1 z-10 items-center">
            <h1 className="font-bold font-serif text-xl text-white mt-10">Formulir Pemesanan</h1>
            <p className="font-normal font-serif text-slate-200 text-sm">Berikut Pesanan Isi Pelanggan</p>
            <div className="flex flex-col ">
              <div className="flex flex-row gap-5">
                <button>Perusahaan</button>
                <button>Pribadi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulir;
