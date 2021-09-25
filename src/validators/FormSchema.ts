import * as yup from 'yup';

class FormSchema {

    public static readonly login: any = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    });

    public static readonly register: any = yup.object({
        name: yup.string().required(),
        linkedIn: yup.string().required(),
        country: yup.string().required(),
        repository: yup.string().required(),
        password: yup.string().required(),
        repeatPassword: yup.string()
            .oneOf([yup.ref('password')], 'Passwords must match')
            .required(),
        description: yup.string().required(),
    });

    public static readonly registerCompany: any = yup.object({
        name: yup.string().required(),
        linkedIn: yup.string().required(),
        country: yup.string().required(),
        website: yup.string().required(),
        password: yup.string().required(),
        repeatPassword: yup.string()
            .oneOf([yup.ref('password')], 'Passwords must match')
            .required(),
        description: yup.string().required(),
    });

}

export { FormSchema };