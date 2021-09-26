import * as yup from 'yup';

import { MessageError } from "../utils/MessageError"

class FormSchema {

    public static readonly login: any = yup.object({
        email: yup.string().email().required(MessageError.EMAIL_REQUIRED),
        password: yup.string().required(MessageError.PASSWORD_REQUIRED),
    });

    public static readonly register: any = yup.object({
        name: yup.string().required(),
        linkedIn: yup.string().required(),
        country: yup.string().required(),
        repository: yup.string().required(),
        password: yup.string().required(MessageError.PASSWORD_REQUIRED),
        repeatPassword: yup.string()
            .oneOf([yup.ref('password')], 'Passwords must match')
            .required(MessageError.PASSWORD_REQUIRED),
        description: yup.string().required(),
    });

    public static readonly registerCompany: any = yup.object({
        name: yup.string().required(),
        linkedIn: yup.string().required(),
        country: yup.string().required(),
        website: yup.string().required(),
        password: yup.string().required(MessageError.PASSWORD_REQUIRED),
        repeatPassword: yup.string()
            .oneOf([yup.ref('password')], 'Passwords must match')
            .required(MessageError.PASSWORD_REQUIRED),
        description: yup.string().required(),
    });

}

export { FormSchema };