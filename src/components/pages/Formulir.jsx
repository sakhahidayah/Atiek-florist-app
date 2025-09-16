import React from "react";
import Navbar from "../templates/Navbar";
import FormulirImg from "../../assets/formulir.jpg";
import LogoNotFound from "../../assets/karangan_bunga/notfoundImage.png";
const Formulir = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex ">
        <div className="w-full h-[200px] md:h-[300px] relative bg-center bg-cover flex flex-col justify-top  items-center" style={{ backgroundImage: `url(${FormulirImg})` }}>
          <div className="bg-black/65 inset-0 absolute"></div>
          <div className="flex flex-col gap-1 z-10 items-center">
            <div className="flex flex-col gap-1 mb-6">
              <h1 className="font-bold font-serif text-xl text-white mt-10">Formulir Pemesanan</h1>
              <p className="font-normal font-serif text-slate-200 text-sm">Berikut Pesanan Isi Pelanggan</p>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center w-[300px] md:w-[600px] md:py-10 md:px-7 h-max rounded bg-white shadow-lg p-5 mb-20">
              <div className="flex flex-row gap-5 w-full justify-center items-center px-10 ">
                <button className="px-3 w-full py-1 rounded-full  bg-[#C7A700] text-white font-semibold text-sm">Perusahaan</button>
                <button className="px-7 w-full py-1 rounded-full border-[#C7A700] border text-[#C7A700] font-semibold text-sm">Pribadi</button>
              </div>
              <div className="flex flex-col gap-2 mt-7 w-full">
                <label htmlFor="" className="font-semibold text-sm">
                  Nama Pengirim
                </label>
                <input className="px-2 py-1 w-full border rounded" type="text" placeholder="Sakha hidayah ramadhan" />
                <label htmlFor="" className="font-semibold text-sm">
                  Nama Perusahaan
                </label>
                <input className="px-2 py-1 w-full border rounded" type="text" placeholder="PT. Bongkar Turret" />
                <label htmlFor="" className="font-semibold text-sm">
                  Nama Yang Bersangkutan
                </label>
                <input className="px-2 py-1 w-full border rounded" type="text" placeholder="Arthur Leywin" />
                <label htmlFor="" className="font-semibold text-sm">
                  Logo Perusahaan
                </label>
                <input type="image" src={LogoNotFound} alt="" className="w-32 h-32 p-1 rounded border" />
                <label htmlFor="" className="font-semibold text-sm">
                  Alamat Pengiriman
                </label>
                <input className="px-2 py-1 w-full border rounded" type="text" placeholder="Jl.Batik Kumeli" />
                <label htmlFor="" className="font-semibold text-sm">
                  Provinsi
                </label>
                <select className="px-2 py-1 w-full border rounded" name="" id="">
                  <option value="">Jawa Tengah</option>
                  <option value="">Jawa Barat</option>
                  <option value="">Jawa Timur</option>
                </select>
                <label htmlFor="" className="font-semibold text-sm">
                  Kabupaten
                </label>
                <select className="px-2 py-1 w-full border rounded" name="" id="">
                  <option value="">Semarang</option>
                  <option value="">Surabaya</option>
                  <option value="">Bandung</option>
                </select>
                <label htmlFor="" className="font-semibold text-sm">
                  Kecamatan
                </label>
                <select className="px-2 py-1 w-full border rounded" name="" id="">
                  <option value="">Gajahmungkur</option>
                  <option value="">Asemrowo</option>
                  <option value="">Cibeunying</option>
                </select>
                <label htmlFor="" className="font-semibold text-sm">
                  Metode Pembayaran
                </label>
                <select className="px-2 py-1 w-full border rounded" name="" id="">
                  <option value="">Qris</option>
                  <option value="">COD</option>
                  <option value="">Transfer</option>
                </select>
                <label htmlFor="" className="font-semibold text-sm">
                  Catatan
                </label>
                <textarea name="" id="" className="w-full h-32 px-3 py-2 font-bold border-2" placeholder="Tolong kasih diskon yah min!!"></textarea>
              </div>
              <button className="self-center px-8 py-1 rounded-full bg-[#C7A700] font-semibold text-white">Pesanan Selesai</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulir;
