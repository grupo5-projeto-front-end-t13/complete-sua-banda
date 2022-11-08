import * as yup from "yup";

export const FormSchemaUpdate = yup.object().shape({
  bio: yup.string().required("Campo obrigatório"),

  social_media: yup.string().required("Campo obrigatório"),

  image: yup.string().required("Campo obrigatório"),

  state: yup.string().required("Campo obrigatório"),

  genre: yup.string().required("Campo obrigatório"),

  requirement: yup.string().required("Campo obrigatório"),
});
