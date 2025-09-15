const ButtonForm = ({ buttonText, linkHomePage }) => {
  return (
    <>
      <a href={linkHomePage} className="text-center w-full  px-3 py-1 font-semibold text-white rounded-md border border-[#C7A700] bg-[#C7A700] mt-3">
        {buttonText}
      </a>
    </>
  );
};

export default ButtonForm;
