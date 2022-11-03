import * as styled from "./styled";

interface iProps {
  name: string;
  link: string;
  type: string;
}

export const LinkComponent = ({ link, name, type }: iProps) => {
  return (
    <styled.LinkTypes type={type} to={`${link}`}>
      {name}
    </styled.LinkTypes>
  );
};
