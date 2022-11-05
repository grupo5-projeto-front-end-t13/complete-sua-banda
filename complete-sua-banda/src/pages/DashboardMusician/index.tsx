import React, { useContext, useEffect, useState } from "react";
import { AuthContext, iRegisterBand  } from "../../context/AuthContext";
import { ModalCard } from "../../components/ModalCard";
import { Modal } from "../../components/Modal";
import { api } from "../../services/ApiRequest";
import { Card } from "../../components/Card";

export const DashboardMusician = () => {
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [bands, setBands] = useState([] as iRegisterBand []);
  const [cardBand, setCardBand] = useState<any>(null);
  const [idBand, setIdBand] = useState<number | undefined>();

  useEffect(() => {
    async function getBands() {
      try {
        const { data } = await api.get<iRegisterBand[]>(
          "/users?type=banda"
        );
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
      setOpenModal(true)
    } catch (error) {
      console.log(error);
    }
  }

  console.log(cardBand);

  return (
    <div>
        {openModal && 
            <Modal setOpenModal={setOpenModal}>
                <ModalCard imagePerfil={cardBand?.image} name={cardBand.name}></ModalCard>
            </Modal>
        }
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
    </div>
  );
};
