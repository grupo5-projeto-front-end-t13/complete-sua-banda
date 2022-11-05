import Logo from "../../assets/Logo-CSB.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LinkComponent } from "../../components/Links";
import * as styled from "./style";
import { formSchemaBand } from "./schemaBand";
import { Input } from "../../components/Input";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Form } from "../../styles/FormStyle";
import { Error } from "../../components/Error";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../../components/Button";
import { AnimatedTransition } from "../../routes/AnimatedTransition";

interface iFormRegisterBand {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const RegisterBand = () => {
  const { submitRegisterBand } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegisterBand>({ resolver: yupResolver(formSchemaBand) });

  const handleForm = handleSubmit((data) => submitRegisterBand(data));

  return (
    <>
      <styled.DivContainer>
        <div className="divForm">
          <AnimatedTransition>
            <Form onSubmit={handleForm}>
              <h1>Somos Uma Banda</h1>
              <Input
                title="Banda"
                register={register}
                type="text"
                name="name"
                icon={<AiOutlineUser />}
              />
              {errors.name && <Error>{errors.name.message}</Error>}
              <Input
                title="Email"
                register={register}
                type="email"
                name="email"
                icon={<AiOutlineMail />}
              />
              {errors.email && <Error>{errors.email.message}</Error>}
              <Input
                title="Senha"
                register={register}
                type="password"
                name="password"
                icon={<AiOutlineLock />}
              />
              {errors.password && <Error>{errors.password.message}</Error>}
              <Input
                title="Repita a senha"
                register={register}
                type="password"
                name="passwordConfirm"
                icon={<AiOutlineLock />}
              />
              {errors.passwordConfirm && (
                <Error>{errors.passwordConfirm.message}</Error>
              )}
              <div className="redirect">
                <p>Já possui cadastro?</p>
                <p>
                  Vá para o{" "}
                  <LinkComponent type="styledB" link="/login" name={"Login"} />
                </p>
              </div>
              <Button type="submit">Cadastre-se</Button>
            </Form>
          </AnimatedTransition>
        </div>
        <AnimatedTransition>
          <div className="divLogo">
            <img src={Logo} alt="Logo CSB" />
            <div className="divLink">
              <LinkComponent
                type="styledA"
                link="/registerMusician"
                name={"Sou um músico"}
              />
              <LinkComponent type="styledA" link="/" name={"Voltar"} />
            </div>
          </div>
        </AnimatedTransition>
      </styled.DivContainer>
    </>
  );
};
