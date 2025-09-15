import React from "react";

const TitleContent = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <h1 className="font-semibold text-3xl md:text-4xl">Selamat Datang </h1>
        <h3 className="font-semibold text-[#C7A700] text-2xl md:text-3xl">ATIEK FLORIST</h3>
      </div>
      <div className="mt-5 flex justify-center items-center md:px-28">
        <p className="font-light text-sm md:text-lg text-center">Terimakasih telah memilih kami sebagai bagian dari momen anda Kami siap membantu Anda mengirimkan kehangatan, cinta, atau duka cita melalui rangkaian bunga terbaik.Pesan dan kirim bunga dengan mudah.Ikuti panduan sederhana di bawah ini.</p>
      </div>
    </>
  );
};

export default TitleContent;
