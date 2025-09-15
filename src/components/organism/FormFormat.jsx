import HeaderForm from "../molecules/HeaderForm";
import InputForm from "../molecules/InputForm";
import ButtonForm from "../atom/ButtonForm";
import TaglineForm from "../molecules/TaglineForm";
import BackgroundForm from "../../assets/bunga-gold.jpg";
const FormFormat = ({ title, linkHomePage, linetext, buttonText, labelName, labelPassword, taglineLink, taglineText, link }) => {
  return (
    <div className="flex md:flex-row md:min-w-[500px] min-w-72 lg:min-w-[650px]  min-h-96   rounded-lg shadow-md">
      <img src={BackgroundForm} alt="bunga-gold.jpg" className="hidden md:block w-60 lg:w-72" />
      <div className="flex flex-col gap-3 items-center  py-10 px-4  bg-white w-full">
        <HeaderForm title={title} linetext={linetext} />
        <div className="flex flex-col gap-3 mt-5 self-start w-full">
          <InputForm labelName={labelName} labelPassword={labelPassword} />
          <TaglineForm taglineText={taglineText} taglineLink={taglineLink} link={link} />
          <ButtonForm buttonText={buttonText} linkHomePage={linkHomePage} />
        </div>
      </div>
    </div>
  );
};

export default FormFormat;
