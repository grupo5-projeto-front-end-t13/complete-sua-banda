import { GlobalStyle } from "./styles/GlobalStyles";
import { useForm } from "react-hook-form";
import { Input } from "./components/Input";
import { AiFillAccountBook } from "react-icons/ai";

const App = () => {
  const { handleSubmit, register } = useForm();

  const handleForm = handleSubmit((data) => console.log(data));

  return (
    <>
      <GlobalStyle />
      <form onSubmit={handleForm}>
        <Input
          register={register}
          type="email"
          name="email"
          icon={<AiFillAccountBook />}
        />
      </form>
    </>
  );
};

export default App;
