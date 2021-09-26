import * as yup from 'yup';

import { MessageError } from "../utils/MessageError"

class FormSchema {

    public static readonly login: any = yup.object({
        email: yup.string().email().required(MessageError.EMAIL_REQUIRED),
        password: yup.string().required(MessageError.PASSWORD_REQUIRED),
    });

    public static readonly register: any = yup.object({
        name: yup.string().required(MessageError.NAME_REQUIRED),
        linkedIn: yup.string().required(MessageError.LINKEDIN_REQUIRED),
        country: yup.string().required(MessageError.COUNTRY_REQUIRED),
        repository: yup.string().required(MessageError.REPOSITORY_REQUIRED),
        password: yup.string().required(MessageError.PASSWORD_REQUIRED),
        repeatPassword: yup.string()
            .oneOf([yup.ref('password')], MessageError.PASSWORD_IS_NOT_MATCH)
            .required(MessageError.PASSWORD_REQUIRED),
        description: yup.string().required(MessageError.DESCRIPTION_REQUIRED),
    });

    public static readonly registerCompany: any = yup.object({
        name: yup.string().required(MessageError.NAME_REQUIRED),
        linkedIn: yup.string().required(MessageError.LINKEDIN_REQUIRED),
        country: yup.string().required(MessageError.COUNTRY_REQUIRED),
        website: yup.string().required(),
        password: yup.string().required(MessageError.PASSWORD_REQUIRED),
        repeatPassword: yup.string()
            .oneOf([yup.ref('password')], MessageError.PASSWORD_IS_NOT_MATCH)
            .required(MessageError.PASSWORD_REQUIRED),
        description: yup.string().required(MessageError.DESCRIPTION_REQUIRED),
    });

}

export { FormSchema };