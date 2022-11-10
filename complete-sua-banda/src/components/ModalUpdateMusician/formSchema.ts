import * as yup from "yup";

export const FormSchemaUpdate = yup.object().shape({
  username: yup.string().required("Campo obrigatório"),

  bio: yup.string().required("Campo obrigatório"),

  social_media: yup.string().required("Campo obrigatório"),

  image: yup.string().required("Campo obrigatório"),

  state: yup.string().required("Campo obrigatório"),

  skill: yup.string().required("Campo obrigatório"),

  skill_level: yup.string().required("Campo obrigatório"),
});
