import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { iRegisterMusician } from "../../services/RegisterMusician";
import { ModalCard } from "../../components/ModalCard";
import { Modal } from "../../components/Modal";
import { api } from "../../services/ApiRequest";
import { Card } from "../../components/Card";
import { toast } from "react-toastify";
import { NavDashBoard } from "../../components/NavDashBoard";
import * as styled from "./style";
import { ModalRemove } from "../../components/ModalRemove";
import { useNavigate } from "react-router-dom";
import { ModalUpdateBand } from "../../components/ModalUpdateBand";
import imgDefault from "../../assets/default.jpg";

export const DashboardBand = () => {
  const {
    user,
    setUser,
    setOpenModal,
    setOpenModalRemove,
    openModal,
    openModalRemove,
    setOpenModalUpdateM,
    setOpenModalUpdateB,
    filteredMusicians,
    setFilteredMusicians,
    openModalUpdateB,
  } = useGlobalContext();
  const [musicians, setMusicians] = useState([] as iRegisterMusician[]);
  const [cardMusician, setCardMusicians] = useState<any>(null);
  const [loadingPageMusician, setLoadingPageMusician] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getMusicians() {
      try {
        const { data } = await api.get<iRegisterMusician[]>(
          "/users?type=musico"
        );
        setMusicians(data);
        setFilteredMusicians(data);
        setLoadingPageMusician(false);
      } catch (error) {
        console.log(error);
      }
    }
    getMusicians();
  }, []);

  async function getCardProps(idMusician: number) {
    try {
      const { data } = await api.get<iRegisterMusician>(`/users/${idMusician}`);
      setCardMusicians(data);
      setOpenModal(true);
    } catch (error) {
      console.log(error);
    }
  }

  const invite = async () => {
    const info = {
      userId: cardMusician.id,
      bio: user?.bio,
      state: user?.state,
      social_media: user?.social_media,
      genre: user?.genre,
      image: user?.image,
      name: user?.name,
    };

    try {
      if (
        user?.bio !== "" ||
        user?.genre !== "" ||
        user?.image !== "" ||
        user?.requirement !== "" ||
        user?.social_media !== "" ||
        user?.state !== ""
      ) {
        await api.post("/bands_invites", info);
        toast.success("Convite enviado");
        setOpenModal(false);
      } else {
        toast.warning("Para convidar um músico complete seu cadastro!");
        setOpenModal(false);
        setOpenModalUpdateB(true);
      }
    } catch (error) {
      toast.error("Ops... tente novamente!");
      console.log(error);
    }
  };

  const remove = async (idUser: number): Promise<void> => {
    try {
      await api.delete(`/users/${idUser}`);
      toast.success("Cadastro removido!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {openModalUpdateB && (
        <Modal
          setOpenModal={setOpenModal}
          setOpenModalRemove={setOpenModalRemove}
          setOpenModalUpdateM={setOpenModalUpdateM}
          setOpenModalUpdateB={setOpenModalUpdateB}
        >
          <ModalUpdateBand setUser={setUser} />
        </Modal>
      )}

      {openModalRemove && (
        <Modal
          setOpenModal={setOpenModal}
          setOpenModalRemove={setOpenModalRemove}
          setOpenModalUpdateM={setOpenModalUpdateM}
          setOpenModalUpdateB={setOpenModalUpdateB}
        >
          <ModalRemove
            image={user?.image}
            name={user?.name}
            id={user?.id}
            remove={remove}
          />
        </Modal>
      )}
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          setOpenModalRemove={setOpenModalRemove}
          setOpenModalUpdateM={setOpenModalUpdateM}
          setOpenModalUpdateB={setOpenModalUpdateB}
        >
          <ModalCard
            imageProfile={
              cardMusician?.image ? cardMusician?.image : imgDefault
            }
            name={cardMusician.username}
            email={cardMusician.email}
            bio={cardMusician.bio}
            type={cardMusician.type}
            invite={invite}
          ></ModalCard>
        </Modal>
      )}
      <NavDashBoard
        image={user?.image ? user?.image : imgDefault}
        musicians={musicians}
      >
        <styled.ContainerUl>
          {filteredMusicians?.length === 0 && loadingPageMusician === false ? (
            <ul>
              <p>Aqui vai a pagina onde fala que não foi encontrado</p>
            </ul>
          ) : (
            <ul>
              {filteredMusicians &&
                filteredMusicians?.map((filteredMusician) => (
                  <Card
                    id={filteredMusician.id}
                    getCardProps={getCardProps}
                    key={filteredMusician.id}
                    name={filteredMusician.name}
                    image={
                      filteredMusician?.image
                        ? filteredMusician?.image
                        : imgDefault
                    }
                    type="musico"
                    state={filteredMusician.state}
                    skill={filteredMusician.skill}
                  />
                ))}
            </ul>
          )}
        </styled.ContainerUl>
      </NavDashBoard>
    </div>
  );
};
