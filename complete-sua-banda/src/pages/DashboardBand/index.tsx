import React, { useEffect, useState } from "react";
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
    openModalUpdateB,
  } = useGlobalContext();
  const [musicians, setMusicians] = useState([] as iRegisterMusician[]);
  const [cardMusician, setCardMusicians] = useState<any>(null);
  const [idMusician, setIdMusician] = useState<number | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    async function getMusicians() {
      try {
        const { data } = await api.get<iRegisterMusician[]>(
          "/users?type=musico"
        );
        setMusicians(data);
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
      await api.post("/bands_invites", info);
      toast.success("Convite enviado");
      setOpenModal(false);
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
            imagePerfil={cardMusician?.image}
            name={cardMusician.username}
            email={cardMusician.email}
            bio={cardMusician.bio}
            type={cardMusician.type}
            invite={invite}
          ></ModalCard>
        </Modal>
      )}
      <NavDashBoard image={user?.image} musicians={musicians}>
        <styled.ContainerUl>
          {filteredMusicians?.length === 0 ? (
            <ul>
              {musicians &&
                musicians.map((musician) => (
                  <Card
                    id={musician.id}
                    getCardProps={getCardProps}
                    key={musician.id}
                    name={musician.name}
                    image={musician?.image}
                    type="musico"
                    state={musician.state}
                    skill={musician.skill}
                  />
                ))}
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
                    image={filteredMusician?.image}
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
