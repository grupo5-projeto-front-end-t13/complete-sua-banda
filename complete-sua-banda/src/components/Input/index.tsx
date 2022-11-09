import * as styled from "./style";

interface iInputProps {
  name: string;
  title: string;
  register: Function;
  type: "email" | "text" | "password";
  icon: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
}

export const Input = ({
  name,
  title,
  register,
  type,
  icon,
  onChange,
  value,
  className,
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
        className={className}
      />
      {icon}
      <label htmlFor={name}>{title}</label>
    </styled.InputDiv>
  );
};
