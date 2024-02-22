import axios from 'axios';
import * as crypto from 'crypto-js';

const baseUrl = 'http://api.valantis.store:40000';
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const day = currentDate.getDate().toString().padStart(2, '0');

const password = crypto.MD5(`Valantis_${year}${month}${day}`).toString();
export const $api = axios.create({
    baseURL: baseUrl,
    headers: {
        'X-Auth': password,
    },
});
