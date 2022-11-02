import * as styled from "./style";

interface iInputProps {
  isPassword?: boolean;
  name: string;
  register: any;
}

export const Input = ({ isPassword, name, register }: iInputProps) => {
  const firstUpper = (str: string) => {
    const strArr = str.split("");
    strArr[0] = strArr[0].toUpperCase();
    return strArr.join("");
  };

  return (
    <styled.InputDiv>
      <input
        {...register(name)}
        type={isPassword ? "password" : "text"}
        required
      />
      <label htmlFor={name}>{firstUpper(name)}</label>
    </styled.InputDiv>
  );
};
