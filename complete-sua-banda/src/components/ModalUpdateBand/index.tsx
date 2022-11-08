import { Input } from "../Input";
import * as styled from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchemaUpdate } from "./formSchema";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { Error } from "../Error";
import { Button } from "../Button";
import { Select } from "../Select";
import { iApiError, iRegisterBand, iDataBand } from "../../context/GlobalContext";
import { GiGuitar } from "react-icons/gi";
import { BsPencil } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { ImImage } from "react-icons/im";
import { FiMap } from "react-icons/fi";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { api } from "../../services/ApiRequest";

export const ModalUpdateBand = ({setUser}: any) => {
  const id = localStorage.getItem("@id_CSB")
  console.log(id)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterBand>({
    resolver: yupResolver(FormSchemaUpdate),
  });

  const updateBand = async ({
    // name,
    // email,
    genre,
    state,
    bio,
    social_media,
    image,
    requirement
  }: iRegisterBand) => {
    const dataBand = {
      // name,
      // email,
      genre,
      state,
      bio,
      social_media,
      image,
      requirement,
    };

    console.log(dataBand)
    try {
      console.log(dataBand)
      await api.patch<iDataBand>(`/users/${id}` , dataBand);
      toast.success("Cadastro Atualizado com sucesso!");
      setUser(dataBand)
      
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.error(requestError.response?.data.message);
      toast.error("Ops... Aconteceu um erro!");
    }
  };

  const handleForm = handleSubmit((data) => updateBand(data));

  return (
    <styled.DivContainer>
      <form onSubmit={handleForm}>
        <h1>Complete seu cadastro</h1>

        {/* <Input
          title="Nome"
          register={register}
          type="text"
          name="name"
          icon={<AiOutlineUser />}
        />
        {errors.name && <Error>{errors.name.message}</Error>}

        <Input
          name="email"
          title="Email"
          type="email"
          register={register}
          icon={<AiOutlineMail />}
        />
        {errors.email && <Error>{errors.email.message}</Error>} */}

        {/* <Input
          name="password"
          title="Senha"
          type="password"
          register={register}
          icon={<AiOutlineLock />}
        />
        {errors.password && <Error>{errors.password.message}</Error>} */}

        <Input
          title="Bio"
          register={register}
          type="text"
          name="bio"
          icon={<BsPencil />}
        />
        {errors.bio && <Error>{errors.bio.message}</Error>}

        <Input
          title="Mídia Social"
          register={register}
          type="text"
          name="social_media"
          icon={<SlSocialLinkedin />}
        />
        {errors.social_media && <Error>{errors.social_media.message}</Error>}

        <Input
          title="Imagem Perfil"
          register={register}
          type="text"
          name="image"
          icon={<ImImage />}
        />
        {errors.image && <Error>{errors.image.message}</Error>}

        {/* USAR API ABAIXO  */}
        {/* https://brasilapi.com.br/api/ibge/uf/v1 */}
        <Select name="state" register={register} icon={FiMap}>
          <option value="">Selecione um Estado</option>
          <option value="RR">Roraima</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="PA">Pará</option>
          <option value="AC">Acre</option>
          <option value="RO">Rondônia</option>
          <option value="TO">Tocantins</option>
          <option value="MA">Maranhão</option>
          <option value="PI">Piauí</option>
          <option value="CE">Ceará</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="PE">Pernambuco</option>
          <option value="AL">Alagoas</option>
          <option value="SE">Sergipe</option>
          <option value="BA">Bahia</option>
          <option value="MT">Mato Grosso</option>
          <option value="DF">Distrito Federal</option>
          <option value="GO">Goiás</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="ES">Espírito Santo</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="SP">São Paulo</option>
          <option value="PR">Paraná</option>
          <option value="SC">Santa Catarina</option>
          <option value="RG">Rio Grande do sul</option>
        </Select>

        {/* <Select name="skill" register={register} icon={GiGuitar}>
          <option value="">Selecione um instrumento</option>
          <option value="Guitarra">Guitarra</option>
          <option value="Baixo">Baixo</option>
          <option value="Violão">Violão</option>
          <option value="Piano">Piano</option>
          <option value="Teclado">Teclado</option>
          <option value="Bateria">Bateria</option>
          <option value="Vocal">Vocal</option>
        </Select>

        <Select name="skill_level" register={register} icon={AiOutlineArrowUp}>
          <option value="">Nível de habilidade</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </Select> */}

        <Input
          title="Genêro musical"
          register={register}
          type="text"
          name="genre"
          icon={<AiOutlineUser />}
        />
        {errors.genre && <Error>{errors.genre.message}</Error>}

        <Select name="requirement" register={register} icon={GiGuitar}>
          <option value="">Selecione o que procura</option>
          <option value="Guitarra">Guitarra</option>
          <option value="Baixo">Baixo</option>
          <option value="Violão">Violão</option>
          <option value="Piano">Piano</option>
          <option value="Teclado">Teclado</option>
          <option value="Bateria">Bateria</option>
          <option value="Vocal">Vocal</option>
        </Select>

        <Button type="submit">Atualizar dados</Button>

      </form>
    </styled.DivContainer>
  );
};
