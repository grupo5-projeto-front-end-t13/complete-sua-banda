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
import noResults from "../../assets/NoResults.png";
import { DeclineAnInvitationBands } from "../../services/DeleteInvite";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiNotificationOff } from "react-icons/bi";

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
    setFilteredBands,
    openModalNotification,
    setUpdateNotification,
    clearStorage,
  } = useGlobalContext();
  const [bands, setBands] = useState([] as iRegisterBand[]);
  const [cardBand, setCardBand] = useState<any>(null);
  const [loadingPageBands, setLoadingPageBands] = useState(true);
  const [filtredCards, setFiltredCards] = useState([] as iRegisterBand[]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getBands() {
      const token = localStorage.getItem("@token_CSB");
      if (token) {
        try {
          const { data } = await api.get<iRegisterBand[]>(
            "/users?type=banda&_embed=members_invites"
          );
          setBands(data);
          setLoadingPageBands(false);
        } catch (error) {
          console.error(error);
          console.log("oi");
          navigate("/");
          clearStorage();
        }
      } else {
        navigate("/");
      }
    }
    getBands();
  }, []);

  useEffect(() => {
    const filter = () => {
      const newBands = bands.filter((band) => {
        if (band.members_invites) {
          if (
            band.members_invites.every(({ email }) => email !== user?.email)
          ) {
            return band;
          }
        }
      });
      setFiltredCards(newBands);
      setFilteredBands(newBands);
    };
    filter();
  }, [bands]);

  const bandsFiltred = (idCardBand: number) => {
    const newBands = bands.filter(({ id }) => id !== idCardBand);
    setBands(newBands);
    setFilteredBands(newBands);
  };

  async function getCardProps(idBand: number) {
    try {
      const { data } = await api.get<iRegisterBand>(`/users/${idBand}`);
      setCardBand(data);
      setOpenModal(true);
    } catch (error) {
      console.error(error);
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
        bandsFiltred(cardBand.id);
      } else {
        toast.warning("Para participar da banda complete seu cadastro");
        setOpenModal(false);
        setOpenModalUpdateM(true);
      }
    } catch (error) {
      toast.error("Ops... tente novamente!");
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
      console.error(error);
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
            setModal={setOpenModalRemove}
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
          <ModalUpdateMusician
            setModal={setOpenModalUpdateM}
            setUser={setUser}
          />
        </Modal>
      )}

      {openModalNotification ? (
        <styled.DivNotifications>
          {user?.bands_invites?.length ? (
            user?.bands_invites?.map((invite, index) => (
              <styled.CardNotifications key={index}>
                <figure>
                  <img src={invite.image} alt="" />
                </figure>
                <div>
                  <div>
                    <h2>{invite.name}</h2>
                    <p>{invite.genre}</p>
                    <p>{invite.social_media}</p>
                  </div>
                  <button
                    onClick={async () =>
                      await DeclineAnInvitationBands(
                        invite.id,
                        setUpdateNotification
                      )
                    }
                  >
                    <AiOutlineCloseCircle />
                  </button>
                </div>
              </styled.CardNotifications>
            ))
          ) : (
            <styled.CardNotifications>
              <section>
                <BiNotificationOff />
                <p>Você não possui nenhuma notificação</p>
              </section>
            </styled.CardNotifications>
          )}
        </styled.DivNotifications>
      ) : (
        <p></p>
      )}

      <NavDashBoard
        image={user?.image ? user?.image : imgDefault}
        bands={bands}
        filtredCards={filtredCards}
        inviteBands={user?.bands_invites}
      >
        <styled.ContainerUlMusician>
          {filteredBands?.length === 0 && loadingPageBands === false ? (
            <ul>
              <div className="noResults">
                <img src={noResults} alt="Não há resultados" />
                <p>Nenhuma correspondência para sua pesquisa.</p>
              </div>
            </ul>
          ) : (
            <ul>
              {(filteredBands ? filteredBands : filtredCards).map(
                (filteredBand) => (
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
                )
              )}
            </ul>
          )}
        </styled.ContainerUlMusician>
      </NavDashBoard>
    </div>
  );
};
