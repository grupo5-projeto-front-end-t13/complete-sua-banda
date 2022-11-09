import * as styled from "./style";

interface iTextAreaProps {
  name: string;
  title: string;
  register: Function;
}

export const TextArea = ({ name, title, register }: iTextAreaProps) => {
  return (
    <styled.TextAreaDiv>
      <textarea
        id={name}
        {...register(name)}
        wrap="soft"
        rows="4"
        cols="29"
        maxLength={200}
        required
      ></textarea>
      <label htmlFor={name}>{title}</label>
    </styled.TextAreaDiv>
  );
};
