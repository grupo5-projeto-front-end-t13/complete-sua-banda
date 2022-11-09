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
import { useMusicianContext } from "../../context/MusicianContext";
import {
  AnimatedEntranceBottom,
  AnimatedEntrancePopIn,
} from "../../routes/AnimatedTransition";

interface iFormRegisterMusician {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  skill: string;
}

export const RegisterMusician = () => {
  const { submitMusician } = useMusicianContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegisterMusician>({
    resolver: yupResolver(formSchemaMusician),
  });

  const handleForm = handleSubmit((data) => submitMusician(data));

  return (
    <>
      <styled.DivMainContainer>
        <div className="divFormMusic">
          <AnimatedEntranceBottom>
            <Form onSubmit={handleForm}>
              <h1>Sou Um Músico</h1>
              <Input
                title="Nome"
                register={register}
                type="text"
                placeholder="Digite seu nome..."
                name="name"
                icon={<AiOutlineUser />}
              />
              {errors.name && <Error>{errors.name.message}</Error>}
              <Input
                title="Email"
                register={register}
                type="email"
                placeholder="Digite seu email..."
                name="email"
                icon={<AiOutlineMail />}
              />
              {errors.email && <Error>{errors.email.message}</Error>}
              <Input
                title="Senha"
                register={register}
                type="password"
                placeholder="Digite sua senha..."
                name="password"
                icon={<AiOutlineLock />}
              />
              {errors.password && <Error>{errors.password.message}</Error>}
              <Input
                title="Repita a senha"
                register={register}
                type="password"
                placeholder="Confirme sua senha..."
                name="passwordConfirm"
                icon={<AiOutlineLock />}
              />
              {errors.passwordConfirm && (
                <Error>{errors.passwordConfirm.message}</Error>
              )}
              <Select name="skill" register={register} icon={GiGuitar}>
                <option value="">Selecione uma posição</option>
                <option value="Guitarra">Guitarrista</option>
                <option value="Baixo">Baixista</option>
                <option value="Violão">Violonista</option>
                <option value="Piano">Pianista</option>
                <option value="Bateria">Baterista</option>
                <option value="Vocal">Vocalista</option>
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
          </AnimatedEntranceBottom>
        </div>
        <AnimatedEntrancePopIn>
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
        </AnimatedEntrancePopIn>
      </styled.DivMainContainer>
    </>
  );
};
