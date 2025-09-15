import Form from "../templates/Form";
const Login = () => {
  return (
    <>
      <Form title={"Login"} linetext={"Silahkan Login terlebih dahulu"} buttonText={"Login"} labelName={"Username"} labelPassword={"Password"} taglineLink={"Register"} taglineText={"Belum punya akun ?"} link={"/register"} linkHomePage="/home" />
    </>
  );
};

export default Login;
