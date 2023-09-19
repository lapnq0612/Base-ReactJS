import { SetupAxios } from './setupAxios';
declare const API_URL: string;

const apiServiceNotAuth = new SetupAxios(API_URL);

export { apiServiceNotAuth };
