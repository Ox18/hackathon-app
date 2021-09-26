export interface IFormSubmitLogin{
    email: string;
    password: string;
}

export interface IFormSubmitRegister{
    name: string;
    linkedIn: string;
    country: string;
    repository: string;
    password: string;
    repeatPassword: string;
    description: string;
}

export interface IFormSubmitRegisterCompany{
    name: string;
    linkedIn: string;
    country: string;
    website: string;
    password: string;
    repeatPassword: string;
    description: string;
}