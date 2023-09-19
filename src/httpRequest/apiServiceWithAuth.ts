import { SetupAxios } from './setupAxios';
// typescript-eslint.io/rules/no-non-null-assertion
const API_ENDPOINT_URI: string = process.env.HOST;
const apiServiceWithAuth = new SetupAxios(API_ENDPOINT_URI);
apiServiceWithAuth.setHeader();

export { apiServiceWithAuth };
