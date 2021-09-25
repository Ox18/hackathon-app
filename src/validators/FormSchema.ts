import * as yup from 'yup';

class FormSchema {
    public static readonly login: any = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    });

    public static readonly register: any = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    });
}

export { FormSchema };