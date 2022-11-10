import * as styled from "./style";

interface iProps {
  name: string;
  link: string;
  type: string;
}

export const LinkComponent = ({ link, name, type }: iProps) => {
  return (
    <styled.LinkTypes type={type} to={`${link}`}>
      <span>{name}</span>
    </styled.LinkTypes>
  );
};
