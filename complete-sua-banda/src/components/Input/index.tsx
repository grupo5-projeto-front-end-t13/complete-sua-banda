import * as styled from "./style";

interface iInputProps {
  name: string;
  title: string;
  register: Function;
  type: "email" | "text" | "password";
  placeholder?: string;
  icon: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Input = ({
  name,
  title,
  register,
  type,
  placeholder,
  icon,
  onChange,
  value,
}: iInputProps) => {
  return (
    <styled.InputDiv>
      <label htmlFor={name}>{title}</label>
      <input
        id={name}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {icon}
    </styled.InputDiv>
  );
};
