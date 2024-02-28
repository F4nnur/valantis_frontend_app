import axios from 'axios';
import axiosRetry from 'axios-retry';
import * as crypto from 'crypto-js';

const baseUrl = 'https://api.valantis.store:41000/';
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

axiosRetry($api, {
    retries: 1,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: (error) => error.response!.status > 400,
});
