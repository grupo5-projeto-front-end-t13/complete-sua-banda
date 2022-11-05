import Logo from "../../assets/Logo-CSB.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LinkComponent } from "../../components/Links";
import { formSchemaMusician } from "./schemaMusician";
import { Input } from "../../components/Input";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { GiGuitar } from "react-icons/gi";
import { Form } from "../../styles/FormStyle";
import { Error } from "../../components/Error";
import * as styled from "./style";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AnimatedTransition } from "../../routes/AnimatedTransition";

interface iFormRegisterMusician {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  skill: string;
}

export const RegisterMusician = () => {
  const { submitRegisterMusicians } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegisterMusician>({
    resolver: yupResolver(formSchemaMusician),
  });

  const handleForm = handleSubmit((data) => submitRegisterMusicians(data));

  return (
    <>
      <styled.DivMainContainer>
        <div className="divFormMusic">
          <AnimatedTransition>
            <Form onSubmit={handleForm}>
              <h1>Sou Um Músico</h1>
              <Input
                title="Nome"
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
              <Select name="skill" register={register} icon={GiGuitar}>
                <option value="">Selecione um instrumento</option>
                <option value="Guitarra">Guitarra</option>
                <option value="Baixo">Baixo</option>
                <option value="Violão">Violão</option>
                <option value="Piano">Piano</option>
                <option value="Teclado">Teclado</option>
                <option value="Bateria">Bateria</option>
                <option value="Vocal">Vocal</option>
                <option value="Outro">Outro</option>
              </Select>
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
                link="/registerBand"
                name={"Sou uma banda"}
              />
              <LinkComponent type="styledA" link="/" name={"Voltar"} />
            </div>
          </div>
        </AnimatedTransition>
      </styled.DivMainContainer>
    </>
  );
};
