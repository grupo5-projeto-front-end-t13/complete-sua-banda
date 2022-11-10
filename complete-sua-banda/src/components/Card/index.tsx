import * as styled from "./style";
import { CgAdd } from "react-icons/cg";

interface iCardProps {
  name?: string | null;
  image?: string;
  state?: string;
  skill?: string;
  type: string;
  genre?: string;
  requirement?: string;
  getCardProps: Function;
  id?: number;
}

export const Card = ({
  name,
  image,
  state,
  skill,
  type,
  genre,
  requirement,
  getCardProps,
  id,
}: iCardProps) => {
  const firstUpper = (str: string | undefined) => {
    if (str) {
      const arr = str.split("");
      arr[0] = arr[0].toUpperCase();
      return arr.join("");
    }
  };

  return (
    <styled.Card onClick={() => getCardProps(id)}>
      <div>
        {name && (
          <h2>{name.length > 17 ? `${name.substring(0, 17)}...` : name}</h2>
        )}
        <div className="cardDescription">
          {type === "musico" ? (
            <p>{state}</p>
          ) : (
            requirement && (
              <p>
                Procura-se um <span>{requirement}</span>
              </p>
            )
          )}
          {type === "musico" ? (
            <span>{firstUpper(skill)}</span>
          ) : (
            <span>{firstUpper(genre)}</span>
          )}
        </div>
      </div>
      <figure>
        <img src={image} alt="foto perfil" />

        <button type="button">
          {" "}
          <CgAdd />{" "}
        </button>
      </figure>
    </styled.Card>
  );
};
