import * as styled from "./style";

interface iInputProps {
  name: string;
  register: Function;
  type: "email" | "text" | "password";
  icon: any;
}

export const Input = ({ name, register, type, icon }: iInputProps) => {
  const firstUpper = (str: string) => {
    const strArr = str.split("");
    strArr[0] = strArr[0].toUpperCase();
    return strArr.join("");
  };

  return (
    <styled.InputDiv>
      <input {...register(name)} type={type} required />
      {icon}
      <label htmlFor={name}>{firstUpper(name)}</label>
    </styled.InputDiv>
  );
};
