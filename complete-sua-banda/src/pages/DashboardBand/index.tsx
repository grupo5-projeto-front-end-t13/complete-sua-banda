import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { useGlobalContext } from "../../context/GlobalContext";
import { iRegisterMusician } from "../../services/RegisterMusician";
import { ModalCard } from "../../components/ModalCard";
import { Modal } from "../../components/Modal";
import { api } from "../../services/ApiRequest";
import { Card } from "../../components/Card";
import { toast } from "react-toastify";
import { NavDashBoard } from "../../components/NavDashBoard";
import * as styled from "./style";

export const DashboardBand = () => {
  const { user, setOpenModal, setOpenModalRemove, openModal, openModalRemove } =
    useGlobalContext();
  const [musicians, setMusicians] = useState([] as iRegisterMusician[]);
  const [cardMusician, setCardMusicians] = useState<any>(null);
  const [idMusician, setIdMusician] = useState<number | undefined>();

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
      // userId: cardBand.id
      // email: cardBand.email,
      // bio: cardBand.bio,
      // state: cardBand.state,
      // social_media: cardBand.social_media,
      // image: cardBand.image,
      // name: cardBand.name,
      // username: cardBand.username,
      // skill: cardBand.skill,
      // skill_level: cardBand.skill_level,
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

  return (
    <div>
      {/* {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <ModalCard
            imagePerfil={cardMusician?.image}
            name={cardMusician.name}
            email={cardMusician.email}
            bio={cardMusician.bio}
            invite={invite}
          ></ModalCard>
        </Modal>
      )} */}
      <NavDashBoard>
        <styled.ContainerUl>
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
        </styled.ContainerUl>
      </NavDashBoard>
    </div>
  );
};
