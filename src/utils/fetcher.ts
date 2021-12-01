import { Fetcher } from '../sdk';

export const fetcher: Fetcher = (params) => fetch(params.url, params).then((res) => res.json());
