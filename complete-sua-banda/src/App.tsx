// import { LoginPage } from "./pages/LoginPage";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Input } from "./components/Input";
import { useForm } from "react-hook-form";
import { AiFillAccountBook } from "react-icons/ai";

const App = () => {
  const { register } = useForm();

  return (
    <>
      <GlobalStyle />
      {/* <LoginPage /> */}
      <Input
        name="email"
        title="E-mail"
        type="email"
        register={register}
        icon={<AiFillAccountBook />}
      />
    </>
  );
};

export default App;
