import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { iRegisterBand } from "../../services/RegisterBand";
import { ModalCard } from "../../components/ModalCard";
import { Modal } from "../../components/Modal";
import { api } from "../../services/ApiRequest";
import { Card } from "../../components/Card";
import { ModalRemove } from "../../components/ModalRemove";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { NavDashBoard } from "../../components/NavDashBoard";
import * as styled from "./style";

export const DashboardMusician = () => {
  const { user, setOpenModal, setOpenModalRemove, openModal, openModalRemove } =
    useGlobalContext();
  const [bands, setBands] = useState([] as iRegisterBand[]);
  const [cardBand, setCardBand] = useState<any>(null);
  const [idBand, setIdBand] = useState<number | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    async function getBands() {
      try {
        const { data } = await api.get<iRegisterBand[]>("/users?type=banda");
        setBands(data);
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
      <button onClick={() => setOpenModalRemove(true)}>Abrir Modal</button>
      {openModalRemove && (
        <Modal
          setOpenModal={setOpenModal}
          setOpenModalRemove={setOpenModalRemove}
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
        >
          {/* <ModalCard imagePerfil="" name={cardBand.name} /> */}
        </Modal>
      )}
      <NavDashBoard>
        <styled.ContainerUlMusician>
          <ul>
            {bands &&
              bands.map((band) => (
                <Card
                  id={band.id}
                  getCardProps={getCardProps}
                  key={band.id}
                  name={band.name}
                  image={band?.image}
                  type="banda"
                  state={band.state}
                  genre={band.genre}
                  requirement={band.requirement}
                />
              ))}
          </ul>
        </styled.ContainerUlMusician>
      </NavDashBoard>
    </div>
  );
};
