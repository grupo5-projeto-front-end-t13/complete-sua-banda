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
import { Users } from "styled-icons/entypo";
import { CgAdd } from 'react-icons/cg';
import { DeclineAnInvitationBands } from "../../services/DeleteBands";



export const DashboardMusician = () => {
  const { user,
         setUser, setOpenModal, setOpenModalRemove, setOpenModalUpdateM, openModal, openModalRemove, openModalUpdateM, setOpenModalUpdateB, filteredBands , setFilteredBands, setOpenModalNotification, openModalNotification} =
    useGlobalContext();
  const [bands, setBands] = useState([] as iRegisterBand[]);
  const [cardBand, setCardBand] = useState<any>(null);
  const [idBand, setIdBand] = useState<number | undefined>();
  const [loadingPageBands, setLoadingPageBands] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    async function getBands() {
      try {
        const { data } = await api.get<iRegisterBand[]>("/users?type=banda");
        setBands(data);
        setFilteredBands(data);
        setLoadingPageBands(false)
      } catch (error) {
        console.log(error);
      }
    }
    getBands();
  }, []);


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
      userId: cardBand.id,
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
      await api.post("/members_invites", info);
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
            imagePerfil={cardBand.image}
            name={cardBand.name}
            email={cardBand.email}
            bio={cardBand.bio}
            invite={invite}
            type={cardBand.type}
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

      <NavDashBoard image={user?.image} bands={bands} inviteBands={user?.bands_invites}>
        <styled.ContainerUlMusician>
          <button onClick={() => setOpenModalUpdateM(true)}>Atualizar Perfil</button>
          {openModalNotification 
          ? 
          ( 
          <styled.UlNotifications>
            {user?.bands_invites?.map( invite => (

              <styled.CardNotifications>
                <figure>
                  <img src={invite.image} alt="" />
                </figure>
                <div>
                  <div>
                    <h2>{invite.name}</h2>
                    <p>{invite.genre} Rock</p>
                  </div>
                  <button onClick={async () => await DeclineAnInvitationBands(invite.id) }><CgAdd/></button>
                </div>
              </styled.CardNotifications>
            )
          
          )}
          </styled.UlNotifications>
          ) : 
          (<p></p>)
            }
          {filteredBands?.length === 0 && loadingPageBands === false ? (
            <ul>
              <p>Aqui vai a página de não encontrado</p>
            </ul>
          ) : (
            <ul>
              {filteredBands &&
                filteredBands.map((filteredBand) => (
                  <Card
                    id={filteredBand.id}
                    getCardProps={getCardProps}
                    key={filteredBand.id}
                    name={filteredBand.name}
                    image={filteredBand.image}
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
