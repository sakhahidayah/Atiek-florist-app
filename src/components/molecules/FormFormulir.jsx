import React from "react";
import LogoNotFound from "../../assets/karangan_bunga/notfoundImage.png";

const FormFormulir = () => {
  return (
    <>
      <div className="flex flex-col gap-2 mt-7 w-full">
        <label htmlFor="" className="font-semibold text-sm">
          Nama Pengirim
        </label>
        <input className="px-2 py-1 w-full border rounded" type="text" placeholder="Masukkan nama anda" />
        <label htmlFor="" className="font-semibold text-sm">
          Nama Perusahaan
        </label>
        <input className="px-2 py-1 w-full border rounded" type="text" placeholder="Masukkan nama perusahaan anda" />
        <label htmlFor="" className="font-semibold text-sm">
          Nama Yang Bersangkutan
        </label>
        <input className="px-2 py-1 w-full border rounded" type="text" placeholder="Masukkan nama yang bersangkutan" />
        <label htmlFor="" className="font-semibold text-sm">
          Logo Perusahaan
        </label>
        <input type="image" src={LogoNotFound} alt="" className="w-32 h-32 p-1 rounded border" placeholder="Masukkan alamat pengiriman" />
        <label htmlFor="" className="font-semibold text-sm">
          Alamat Pengiriman
        </label>
        <input className="px-2 py-1 w-full border rounded" type="text" placeholder="Masukkan alamat pengiriman" />
        <label htmlFor="" className="font-semibold text-sm">
          Provinsi
        </label>
        <select className="px-2 py-1 w-full border rounded" name="" id="">
          <option value="" className="">
            Select One
          </option>
          <option value="">Jawa Tengah</option>
          <option value="">Jawa Barat</option>
          <option value="">Jawa Timur</option>
        </select>
        <label htmlFor="" className="font-semibold text-sm">
          Kabupaten
        </label>
        <select className="px-2 py-1 w-full border rounded" name="" id="">
          <option value="">Select One</option>

          <option value="">Semarang</option>
          <option value="">Surabaya</option>
          <option value="">Bandung</option>
        </select>
        <label htmlFor="" className="font-semibold text-sm">
          Kecamatan
        </label>
        <select className="px-2 py-1 w-full border rounded" name="" id="">
          <option value="">Select One</option>

          <option value="">Gajahmungkur</option>
          <option value="">Asemrowo</option>
          <option value="">Cibeunying</option>
        </select>
        <label htmlFor="" className="font-semibold text-sm">
          Metode Pembayaran
        </label>
        <select className="px-2 py-1 w-full border rounded" name="" id="">
          <option value="">Select One</option>
          <option value="">Qris</option>
          <option value="">COD</option>
          <option value="">Transfer</option>
        </select>
        <label htmlFor="" className="font-semibold text-sm">
          Catatan
        </label>
        <textarea name="" id="" className="w-full h-32 px-3 py-2 font-bold border-2" placeholder="Tolong kasih diskon yah min!!"></textarea>
      </div>
    </>
  );
};

export default FormFormulir;
