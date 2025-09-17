import FormFormulir from "../molecules/FormFormulir";
import HeaderFormulir from "../molecules/HeaderFormulir";
import HeaderFormFormulir from "../molecules/HeaderFormFormulir";
import FormulirImg from "../../assets/formulir.jpg";
import ButtonFormFormulir from "../atom/ButtonFormFormulir";

const ContentFormulir = () => {
  return (
    <>
      <div className="w-full h-[200px] md:h-[300px] relative bg-center bg-cover flex flex-col justify-top  items-center" style={{ backgroundImage: `url(${FormulirImg})` }}>
        <div className="bg-black/55 inset-0 absolute"></div>
        <div className="flex flex-col gap-1 z-10 items-center">
          <HeaderFormulir />
          <div className="flex flex-col gap-5 justify-center items-center w-[300px] md:w-[600px] md:py-10 md:px-7 h-max rounded bg-white shadow-lg p-5 mb-20">
            <HeaderFormFormulir />
            <FormFormulir />
            <ButtonFormFormulir />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentFormulir;
