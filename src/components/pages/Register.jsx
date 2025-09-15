import Form from "../templates/Form";
const Register = () => {
  return (
    <>
      <Form title={"Register"} linetext={"Daftarkan Akunmu sekarang"} buttonText={"Register"} labelName={"Username"} labelPassword={"Password"} taglineLink={"Login"} taglineText={"Sudah punya akun ?"} link={"/login"} linkHomePage="/login" />
    </>
  );
};

export default Register;
