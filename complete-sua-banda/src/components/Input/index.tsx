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
  className?: string;
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
  className,
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
        className={className}
      />
      {icon}
    </styled.InputDiv>
  );
};
