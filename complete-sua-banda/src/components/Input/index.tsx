import * as styled from "./style";

interface iInputProps {
  name: string;
  title: string;
  register: Function;
  type: "email" | "text" | "password";
  icon: any;
}

export const Input = ({ name, title, register, type, icon }: iInputProps) => {
  return (
    <styled.InputDiv>
      <input id={name} {...register(name)} type={type} required />
      {icon}
      <label htmlFor={name}>{title}</label>
    </styled.InputDiv>
  );
};
