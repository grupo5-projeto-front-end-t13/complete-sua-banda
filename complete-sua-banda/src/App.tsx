import { GlobalStyle } from "./styles/GlobalStyles";
import { useForm } from "react-hook-form";
import { Input } from "./components/Input";

const App = () => {
  const { handleSubmit, register } = useForm();

  const handleForm = handleSubmit((data) => console.log(data));

  return (
    <>
      <GlobalStyle />
      <form onSubmit={handleForm}>
        <Input name="email" register={register} />
      </form>
    </>
  );
};

export default App;
