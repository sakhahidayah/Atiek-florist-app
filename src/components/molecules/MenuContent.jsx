import Bouquet from "../../assets/emojione-monotone_bouquet.png";
import FormulirImg from "../../assets/clarity_form-line.png";
import CashImg from "../../assets/mdi_cash-multiple.png";
import TruckImg from "../../assets/mdi_truck.png";

const MenuContent = () => {
  return (
    <>
      <div className="flex flex-col hover:bg-gray-100 cursor-pointer transition-all duration-300 rounded-lg gap-2 items-center justify-center p-3 shadow-md">
        <img className="w-20 h-20 " src={Bouquet} alt="" />
        <h5 className="font-bold text-lg text-center text-[#C7A700]">PILIH MODEL</h5>
        <p className="text-center text-sm font-light ">Pilih Model Yang Anda Suka</p>
      </div>
      <div className="flex flex-col hover:bg-gray-100 cursor-pointer transition-all duration-300 rounded-lg gap-2 items-center justify-center p-3 shadow-md">
        <img className="w-20 h-20 " src={FormulirImg} alt="" />
        <h5 className="font-bold text-lg text-center text-[#C7A700]">ISI FORMULIR</h5>
        <p className="text-center text-sm font-light ">Isi Fromulir Pembelian</p>
      </div>
      <div className="flex flex-col hover:bg-gray-100 cursor-pointer transition-all duration-300 rounded-lg gap-2 items-center justify-center p-3 shadow-md">
        <img className="w-20 h-20 " src={CashImg} alt="" />
        <h5 className="font-bold text-lg text-center text-[#C7A700]">PEMBAYARAN</h5>
        <p className="text-center text-sm font-light ">Bayar Dengan Berbagai Metode</p>
      </div>
      <div className="flex flex-col hover:bg-gray-100 cursor-pointer transition-all duration-300 rounded-lg gap-2 items-center justify-center p-3 shadow-md">
        <img className="w-20 h-20 " src={TruckImg} alt="" />
        <h5 className="font-bold text-lg text-center text-[#C7A700]">TUNGGU PESANAN</h5>
        <p className="text-center text-sm font-light ">Tunggu Pesanan Dirumah</p>
      </div>
    </>
  );
};

export default MenuContent;
