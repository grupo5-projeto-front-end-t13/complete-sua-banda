import Logo from "../../assets/Logo-CSB.png";
import { Input } from "../../components/Input";
import * as styled from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchemaLogin } from "./formSchema";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Form } from "../../styles/FormStyle";
import { Error } from "../../components/Error";

export const LoginPage = () => {
  interface iFormLoginProps {
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLoginProps>({
    resolver: yupResolver(FormSchemaLogin),
  });

  return (
    <styled.DivContainer>
      <div className="divLeft">
        <img src={Logo} alt="Logo CSB" />
        <styled.LinkBtn to="/">Voltar</styled.LinkBtn>
      </div>
      <div className="divRight">
        <Form>
          <h1>Login</h1>
          <Input
            name="email"
            title="Email"
            type="email"
            register={register}
            icon={<AiOutlineMail />}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
          <Input
            name="password"
            title="Senha"
            type="password"
            register={register}
            icon={<AiOutlineLock />}
          />
          <p>
            Ainda não possui cadastro?<br></br>
            <styled.LinkStyled to="/signup">Cadastre-se</styled.LinkStyled>
          </p>
          <button type="submit">Entrar</button>
          <styled.LinkBtn to="/">Voltar</styled.LinkBtn>
        </Form>
      </div>
    </styled.DivContainer>
  );
};
