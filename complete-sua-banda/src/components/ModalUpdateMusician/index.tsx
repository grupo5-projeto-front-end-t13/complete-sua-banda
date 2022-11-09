import { Input } from "../Input";
import * as styled from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchemaUpdate } from "./formSchema";
import { AiOutlineUser, AiOutlineArrowUp } from "react-icons/ai";
import { Error } from "../Error";
import { Button } from "../Button";
import { Select } from "../Select";
import { iApiError, iUser } from "../../context/GlobalContext";
import { GiGuitar } from "react-icons/gi";
import { IoShareSocialSharp } from "react-icons/io5";
import { ImImage } from "react-icons/im";
import { FiMap } from "react-icons/fi";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { api } from "../../services/ApiRequest";
import {
  iDataMusician,
  iRegisterMusician,
} from "../../services/RegisterMusician";
import { TextArea } from "../TextArea";

interface iModalUpdateMusicianProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: any;
}

export const ModalUpdateMusician = ({
  setModal,
  setUser,
}: iModalUpdateMusicianProps) => {
  const id = localStorage.getItem("@id_CSB");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterMusician>({
    resolver: yupResolver(FormSchemaUpdate),
  });

  const updateMusician = async ({
    skill,
    state,
    bio,
    social_media,
    image,
    username,
    skill_level,
  }: iRegisterMusician) => {
    const dataMusician = {
      skill,
      state,
      bio,
      social_media,
      image,
      username,
      skill_level,
    };
    try {
      await api.patch<iDataMusician>(`/users/${id}`, dataMusician);
      toast.success("Cadastro Atualizado com sucesso!");
      setUser(dataMusician);
      setModal(false);
    } catch (error) {
      toast.error("Ops... Aconteceu um erro!");
    }
  };

  const handleForm = handleSubmit((data) => updateMusician(data));

  return (
    <styled.DivContainer>
      <form onSubmit={handleForm}>
        <h1>Complete seu cadastro</h1>

        <Input
          title="Username"
          register={register}
          type="text"
          placeholder="Nome de usuário..."
          name="username"
          icon={<AiOutlineUser />}
        />
        {errors.username && <Error>{errors.username.message}</Error>}

        <TextArea title="Bio" register={register} name="bio" />
        {errors.bio && <Error>{errors.bio.message}</Error>}

        <Input
          title="Mídia Social"
          register={register}
          type="text"
          placeholder="Link de rede social..."
          name="social_media"
          icon={<IoShareSocialSharp />}
        />
        {errors.social_media && <Error>{errors.social_media.message}</Error>}

        <Input
          title="Imagem Perfil"
          register={register}
          type="text"
          placeholder="Link da foto de perfil..."
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

        <Select name="skill" register={register} icon={GiGuitar}>
          <option value="">Selecione uma posição</option>
          <option value="Guitarra">Guitarrista</option>
          <option value="Baixo">Baixista</option>
          <option value="Violão">Violonista</option>
          <option value="Piano">Pianista</option>
          <option value="Bateria">Baterista</option>
          <option value="Vocal">Vocalista</option>
        </Select>

        <Select name="skill_level" register={register} icon={AiOutlineArrowUp}>
          <option value="">Nível de habilidade</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </Select>

        <Button type="submit">Atualizar dados</Button>
      </form>
    </styled.DivContainer>
  );
};
