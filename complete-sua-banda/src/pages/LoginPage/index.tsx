import Logo from "../../assets/Logo-CSB.png";
import { Input } from "../../components/Input";
import * as styled from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchemaLogin } from "./formSchema";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { VscLoading } from "react-icons/vsc";
import { Form } from "../../styles/FormStyle";
import { Error } from "../../components/Error";
import { LinkComponent } from "../../components/Links";
import { useGlobalContext } from "../../context/GlobalContext";
import { Button } from "../../components/Button";
import {
  AnimatedEntranceBottom,
  AnimatedEntrancePopIn,
} from "../../routes/AnimatedTransition";

interface iFormLoginProps {
  email: string;
  password: string;
}
export const LoginPage = () => {
  const { submitLogin, buttonLoading, setButtonLoading } = useGlobalContext();

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
        <AnimatedEntrancePopIn>
          <div className="divLeft">
            <img src={Logo} alt="Logo CSB" />
            <LinkComponent link="/" name="Voltar" type="styledA" />
          </div>
        </AnimatedEntrancePopIn>
        <div className="divRight">
          <AnimatedEntranceBottom>
            <Form onSubmit={handleForm}>
              <h1>Login</h1>

              <Input
                name="email"
                title="Email"
                type="email"
                placeholder="Digite seu email..."
                register={register}
                icon={<AiOutlineMail />}
              />
              {errors.email && <Error>{errors.email.message}</Error>}
              <Input
                name="password"
                title="Senha"
                type="password"
                placeholder="Digite sua senha..."
                register={register}
                icon={<AiOutlineLock />}
              />
              {errors.password && <Error>{errors.password.message}</Error>}
              <p>
                Ainda não possui cadastro?<br></br>
                <LinkComponent
                  link="/registerBand"
                  name="Cadastre-se"
                  type="styledB"
                />
              </p>
              {buttonLoading ? (
                <Button disabled type="submit">
                  <VscLoading />
                  Entrando...
                </Button>
              ) : (
                <Button type="submit">Entrar</Button>
              )}
              <div className="divLink">
                <LinkComponent link="/" name="Voltar" type="styledA" />
              </div>
            </Form>
          </AnimatedEntranceBottom>
        </div>
      </styled.DivContainer>
    </>
  );
};
