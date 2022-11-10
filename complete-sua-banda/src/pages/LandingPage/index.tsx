import logo from "../../assets/Logo-CSB.png";
import brunoImg from "../../assets/bruno.jpg";
import eltonImg from "../../assets/elton.jpg";
import fernandoImg from "../../assets/fernando.jpg";
import juliaImg from "../../assets/julia.jpg";
import matheusImg from "../../assets/matheus.jpg";
import rogerImg from "../../assets/roger.jpg";
import { LinkComponent } from "../../components/Links";
import * as styled from "./style";
import { useState } from "react";
import {
  AnimatedEntranceBottom,
  AnimatedEntranceTop,
} from "../../routes/AnimatedTransition";
import { FiChevronsDown } from "react-icons/fi";

interface iDevs {
  name: string;
  img: string;
  link: string;
}

export const LandingPage = () => {
  const [devs] = useState<iDevs[]>([
    {
      name: "Bruno Paulin",
      img: `${brunoImg}`,
      link: "https://www.linkedin.com/in/bruno-paulin-63433b232/",
    },
    {
      name: "Elton L. Scholze",
      img: `${eltonImg}`,
      link: "https://www.linkedin.com/in/eltonlscholze/",
    },
    {
      name: "Fernando Junqueira",
      img: `${fernandoImg}`,
      link: "https://www.linkedin.com/in/fernando-luís-junqueira-lima-84ab2b218/",
    },
    {
      name: "Julia Albuquerque",
      img: `${juliaImg}`,
      link: "https://www.linkedin.com/in/juliaalbuquerqueaguiar/",
    },
    {
      name: "Matheus Oliveira",
      img: `${matheusImg}`,
      link: "https://www.linkedin.com/in/matheusoliveira1997/",
    },
    {
      name: "Róger Aguiar",
      img: `${rogerImg}`,
      link: "https://www.linkedin.com/in/rógeraguiar/",
    },
  ]);

  return (
    <>
      <styled.HeaderLandingPage>
        <styled.DivLogo1>
          <img src={logo} alt="Logo CSB" />
          <h1>Complete sua Banda</h1>
        </styled.DivLogo1>
        <styled.DivLinks>
          <LinkComponent type={"styledA"} name={"Entrar"} link={"/login"} />
          <LinkComponent
            type={"styledA"}
            name={"Cadastrar"}
            link={"/registerBand"}
          />
        </styled.DivLinks>
      </styled.HeaderLandingPage>
      <styled.Bcg />
      <AnimatedEntranceBottom>
        <styled.Container>
          <styled.DivLogo2>
            <img src={logo} alt="Imagem logo" />
          </styled.DivLogo2>
          <styled.DivText>
            <h2>Complete sua Banda</h2>
            <p>
              O Complete sua Banda é um site onde você músico, que está
              procurando um novo integrante pra sua banda, ou está atrás de uma
              banda para fazer parte, consegue encontrá-los!
            </p>
            <span>
              O Complete sua Banda é um projeto de final de módulo realizado
              apenas com finalidades acadêmicas.
            </span>
          </styled.DivText>
        </styled.Container>
      </AnimatedEntranceBottom>
      <styled.ScrollDown1>
        <FiChevronsDown />
      </styled.ScrollDown1>
      <AnimatedEntranceTop>
        <styled.Container2>
          <styled.DivList>
            <h3>Como Banda</h3>
            <styled.Ul>
              <li>
                <span>1</span>
                <p>Cadastre-se fácil e rápido</p>
              </li>
              <li>
                <span>2</span>
                <p>Procure músicos e os convide</p>
              </li>
              <li>
                <span>3</span>
                <p>Pronto! Aguarde o músico aceitar o convite</p>
              </li>
            </styled.Ul>
          </styled.DivList>
          <div>
            <img src={logo} alt="Imagem Logo" />
          </div>
          <styled.DivList>
            <h3>Como Músico</h3>
            <styled.Ul>
              <li>
                <span>1</span>
                <p>Cadastre-se fácil e rápido</p>
              </li>
              <li>
                <span>2</span>
                <p>Procure por uma banda e se inscreva</p>
              </li>
              <li>
                <span>3</span>
                <p>Pronto! Aguarde a banda aceitar o convite</p>
              </li>
            </styled.Ul>
          </styled.DivList>
        </styled.Container2>
      </AnimatedEntranceTop>
      <styled.ScrollDown2>
        <FiChevronsDown />
      </styled.ScrollDown2>
      <styled.Footer>
        <styled.DivDevs>
          <h3>Equipe de desenvolvimento</h3>
          <styled.UlFooter>
            {devs.map((dev) => (
              <li key={dev.name}>
                <img src={dev.img} alt={`Imagem ${dev.name}`} />
                <span>
                  {dev.name} -{" "}
                  <a href={dev.link} target={"_blank"} rel="noreferrer">
                    Linkedin
                  </a>
                </span>
              </li>
            ))}
          </styled.UlFooter>
        </styled.DivDevs>
        <styled.DivLogo2>
          <img src={logo} alt="Logo CSB" />
        </styled.DivLogo2>
      </styled.Footer>
    </>
  );
};
