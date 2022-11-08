import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { iRegisterBand } from "../../services/RegisterBand";
import { ModalCard } from "../../components/ModalCard";
import { Modal } from "../../components/Modal";
import { ModalUpdateMusician } from "../../components/ModalUpdateMusician";
import { api } from "../../services/ApiRequest";
import { Card } from "../../components/Card";
import { ModalRemove } from "../../components/ModalRemove";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { NavDashBoard } from "../../components/NavDashBoard";
import * as styled from "./style";
import imgDefault from "../../assets/default.jpg";

export const DashboardMusician = () => {
  const {
    user,
    setUser,
    setOpenModal,
    setOpenModalRemove,
    setOpenModalUpdateM,
    openModal,
    openModalRemove,
    openModalUpdateM,
    setOpenModalUpdateB,
    filteredBands,
  } = useGlobalContext();
  const [bands, setBands] = useState([] as iRegisterBand[]);
  const [cardBand, setCardBand] = useState<iRegisterBand>();
  const [cardsFiltred, setCardsFiltred] = useState([] as iRegisterBand[]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getBands() {
      try {
        const { data } = await api.get<iRegisterBand[]>(
          "/users?type=banda&_embed=members_invites"
        );
        setBands(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBands();
  }, []);

  useEffect(() => {
    const filter = () => {
      setCardsFiltred(
        bands.filter((band) => {
          if (band.members_invites) {
            const filtered = band.members_invites.map((member) => {
              if (member.email === user?.email) {
                return member;
              }
            });
            if (filtered.length === 0) {
              return band;
            }
          }
        })
      );
    };
    filter();
  }, [bands]);

  async function getCardProps(idBand: number) {
    try {
      const { data } = await api.get<iRegisterBand>(`/users/${idBand}`);
      setCardBand(data);
      setOpenModal(true);
    } catch (error) {
      console.log(error);
    }
  }

  const invite = async () => {
    const info = {
      userId: cardBand?.id,
      email: user?.email,
      bio: user?.bio,
      state: user?.state,
      social_media: user?.social_media,
      image: user?.image,
      name: user?.name,
      username: user?.username,
      skill: user?.skill,
      skill_level: user?.skill_level,
    };
    try {
      if (
        user?.bio !== "" ||
        user?.skill_level !== "" ||
        user?.image !== "" ||
        user?.username !== "" ||
        user?.social_media !== "" ||
        user?.state !== ""
      ) {
        await api.post("/members_invites", info);
        toast.success("Convite enviado");
        setOpenModal(false);
      } else {
        toast.warning("Para participar da banda complete seu cadastro");
        setOpenModal(false);
        setOpenModalUpdateM(true);
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
      {openModalRemove && (
        <Modal
          setOpenModal={setOpenModal}
          setOpenModalRemove={setOpenModalRemove}
          setOpenModalUpdateM={setOpenModalUpdateM}
          setOpenModalUpdateB={setOpenModalUpdateB}
        >
          <ModalRemove
            image={user?.image ? user?.image : imgDefault}
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
            imageProfile={cardBand?.image ? cardBand?.image : imgDefault}
            name={cardBand?.name}
            email={cardBand?.email}
            bio={cardBand?.bio}
            invite={invite}
            type={cardBand?.type}
          />
        </Modal>
      )}
      {openModalUpdateM && (
        <Modal
          setOpenModal={setOpenModal}
          setOpenModalRemove={setOpenModalRemove}
          setOpenModalUpdateM={setOpenModalUpdateM}
          setOpenModalUpdateB={setOpenModalUpdateB}
        >
          <ModalUpdateMusician setUser={setUser} />
        </Modal>
      )}

      <NavDashBoard
        image={user?.image ? user?.image : imgDefault}
        bands={bands}
      >
        <styled.ContainerUlMusician>
          <button onClick={() => setOpenModalUpdateM(true)}>
            Atualizar Perfil
          </button>
          {filteredBands?.length === 0 ? (
            <ul>
              {cardsFiltred &&
                cardsFiltred.map((band) => (
                  <Card
                    id={band.id}
                    getCardProps={getCardProps}
                    key={band.id}
                    name={band.name}
                    image={band.image ? band.image : imgDefault}
                    type="banda"
                    state={band.state}
                    genre={band.genre}
                    requirement={band.requirement}
                  />
                ))}
            </ul>
          ) : (
            <ul>
              {filteredBands &&
                filteredBands?.map((filteredBand) => (
                  <Card
                    id={filteredBand.id}
                    getCardProps={getCardProps}
                    key={filteredBand.id}
                    name={filteredBand.name}
                    image={filteredBand.image ? filteredBand.image : imgDefault}
                    type="banda"
                    state={filteredBand.state}
                    genre={filteredBand.genre}
                    requirement={filteredBand.requirement}
                  />
                ))}
            </ul>
          )}
        </styled.ContainerUlMusician>
      </NavDashBoard>
    </div>
  );
};
