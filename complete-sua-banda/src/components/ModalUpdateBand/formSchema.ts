import * as yup from "yup";

export const FormSchemaUpdate = yup.object().shape({
    // name: yup
    // .string()
    // .required("Campo obrigatório")
    // .min(5, "Deve possuir no mínimo 5 letras"),

    // email: yup.string().required("Campo obrigatório").email("Email inválido"),

    // password: yup
    //     .string()
    //     .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
    //     .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
    //     .matches(/(\d)/, "Deve conter ao menos um número")
    //     .matches(/(\W)|_/, "Deve conter ao menos um caractere especial")
    //     .trim()
    //     .matches(/.{8,}/, "Deve ter no mínimo 8 dígitos")
    //     .required("Senha obrigatória"),

    // username:yup.string().required("Campo obrigatório"),

    bio:yup.string().required("Campo obrigatório"),

    social_media:yup.string().required("Campo obrigatório"),

    image:yup.string().required("Campo obrigatório"),

    state:yup.string().required("Campo obrigatório"),

    genre:yup.string().required("Campo obrigatório"),

    requirement:yup.string().required("Campo obrigatório"),


  });

