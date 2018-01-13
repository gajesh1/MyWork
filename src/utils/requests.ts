// Add methods for api calls using axios here
import Axios, {AxiosResponse} from 'axios';
import {serverURL} from '../config';

export function doGet(url: string) {

    return Axios.get(serverURL + url)
        .then((response: AxiosResponse): void => {
            return response.data || {};
        })
        .catch(() => {
            // Error handling code goes here
        });
}
