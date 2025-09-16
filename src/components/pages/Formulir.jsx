import Navbar from "../templates/Navbar";
import ContentFormulir from "../organism/ContentFormulir";

const Formulir = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex ">
        <ContentFormulir />
      </div>
    </>
  );
};

export default Formulir;
