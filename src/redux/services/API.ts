import axios, { AxiosInstance } from 'axios';

class APIManager{
    public static readonly API_URL:string = "http://localhost:3000/";

    public static readonly API_timeout:number = 1000;

    public static readonly API_headers = {
        'X-Custom-Header': 'foobar'
    };

    public static readonly instante:AxiosInstance = axios.create({
        baseURL: APIManager.API_URL,
        timeout: APIManager.API_timeout,
        headers: APIManager.API_headers
    });
}

export { APIManager };