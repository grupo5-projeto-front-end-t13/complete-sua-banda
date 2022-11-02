import * as styled from "./styled";

interface iProps {
  name: string;
  link: string;
  type: string;
}

export const LinkComponent = ({ link, name, type }: iProps) => {
  return (
    <styled.StyledLink type={type} to={`${link}`}>
      {name}
    </styled.StyledLink>
  );
};
