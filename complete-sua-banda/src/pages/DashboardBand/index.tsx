import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { AuthContext, iRegisterMusician } from "../../context/AuthContext";
import { ModalCard } from "../../components/ModalCard";
import { Modal } from "../../components/Modal";
import { api } from "../../services/ApiRequest";
import { Card } from "../../components/Card";

export const DashboardBand = () => {
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
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
      setOpenModal(true)
    } catch (error) {
      console.log(error);
    }
  }

  console.log(cardMusician);

  return (
    <div>
        {openModal && 
            <Modal setOpenModal={setOpenModal}>
                <ModalCard imagePerfil={cardMusician?.image} name={cardMusician.name}></ModalCard>
            </Modal>
        }
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
    </div>
  );
};
