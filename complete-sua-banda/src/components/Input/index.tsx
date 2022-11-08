import * as styled from "./style";

interface iInputProps {
  name: string;
  title: string;
  register: Function;
  type: "email" | "text" | "password";
  icon: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Input = ({
  name,
  title,
  register,
  type,
  icon,
  onChange,
  value,
}: iInputProps) => {
  return (
    <styled.InputDiv>
      <input
        id={name}
        {...register(name)}
        type={type}
        required
        value={value}
        onChange={onChange}
      />
      {icon}
      <label htmlFor={name}>{title}</label>
    </styled.InputDiv>
  );
};
