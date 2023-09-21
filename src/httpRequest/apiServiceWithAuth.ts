import { SetupAxios } from './setupAxios';
const API_ENDPOINT_URI: string = process.env.HOST;
const apiServiceWithAuth = new SetupAxios(API_ENDPOINT_URI);
apiServiceWithAuth.setHeader();

export { apiServiceWithAuth };
