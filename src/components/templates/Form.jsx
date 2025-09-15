import Background from "../../assets/bg-form.jpg";
import FormFormat from "../organism/FormFormat";
const Form = ({ title, linetext, buttonText, labelName, labelPassword, taglineLink, taglineText, link, linkHomePage }) => {
  return (
    <>
      <div className="w-screen h-screen bg-cover bg-center justify-center items-center flex" style={{ backgroundImage: `url(${Background})` }}>
        <FormFormat title={title} linetext={linetext} buttonText={buttonText} labelName={labelName} labelPassword={labelPassword} taglineLink={taglineLink} taglineText={taglineText} link={link} linkHomePage={linkHomePage} />
      </div>
    </>
  );
};

export default Form;
