import Logo from "../../assets/Logo-CSB.png";
import { Input } from "../../components/Input";
import * as styled from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchemaLogin } from "./formSchema";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Form } from "../../styles/FormStyle";
import { Error } from "../../components/Error";
import { LinkComponent } from "../../components/Links";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../../components/Button";
import { AnimatedTransition } from "../../routes/AnimatedTransition";

interface iFormLoginProps {
  email: string;
  password: string;
}
export const LoginPage = () => {
  const { submitLogin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLoginProps>({
    resolver: yupResolver(FormSchemaLogin),
  });

  const handleForm = handleSubmit((data) => submitLogin(data));

  return (
    <>
      <styled.DivContainer>
        <AnimatedTransition>
          <div className="divLeft">
            <img src={Logo} alt="Logo CSB" />
            <LinkComponent link="/" name="Voltar" type="styledA" />
          </div>
        </AnimatedTransition>
        <div className="divRight">
          <AnimatedTransition>
            <Form onSubmit={handleForm}>
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
                <LinkComponent
                  link="/registerBand"
                  name="Cadastre-se"
                  type="styledB"
                />
              </p>
              <Button type="submit">Entrar</Button>
              <div className="divLink">
                <LinkComponent link="/" name="Voltar" type="styledA" />
              </div>
            </Form>
          </AnimatedTransition>
        </div>
      </styled.DivContainer>
    </>
  );
};
