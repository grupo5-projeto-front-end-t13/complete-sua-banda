import * as yup from "yup";

export const formSchemaBand = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .min(5, "Deve possuir no mínimo 5 letras"),

  email: yup.string().required("Campo obrigatório").email("email inválido"),

  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter ao menos um caractere especial")
    .trim()
    .matches(/.{8,}/, "Deve ter no mínimo 8 dígitos")
    .required("Senha obrigatória"),

  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "A confirmação deve ser igual a senha"),
});
