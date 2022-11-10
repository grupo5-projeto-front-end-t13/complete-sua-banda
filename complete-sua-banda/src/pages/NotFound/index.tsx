import { Container } from "./style";
import Image from "../../assets/404.png";
import { LinkComponent } from "../../components/Links";
import { GiSpaceSuit } from "react-icons/gi";
import {
  AnimatedEntrancePopIn,
  AnimatedEntranceBottom,
} from "../../routes/AnimatedTransition";

export const NotFound = () => {
  return (
    <Container>
      <AnimatedEntrancePopIn>
        <img src={Image} alt="Ilustration of 404" />
      </AnimatedEntrancePopIn>

      <AnimatedEntranceBottom>
        <p>
          Ops, parece que você se aventurou longe demais!
          <GiSpaceSuit />
        </p>
      </AnimatedEntranceBottom>
      <AnimatedEntranceBottom>
        <LinkComponent name="Voltar" type="styledA" link="/" />
      </AnimatedEntranceBottom>
    </Container>
  );
};
