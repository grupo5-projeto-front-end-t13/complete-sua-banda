import * as yup from "yup";

export const FormSchemaLogin = yup.object().shape({
  email: yup.string().required("E-mail obrigatório!").email("E-mail inválido!"),
  password: yup.string().required("Senha é obrigatória"),
});
