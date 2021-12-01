import { Fetcher } from '../sdk';

interface Handlers {
  onResponse: (response: any) => void;
  onRequest?: (request: any) => void;
}
export const fetcher: (handlers: Handlers) => Fetcher = (handlers) => (params) =>
  fetch(params.url, params)
    .then((res) => res.json())
    .then((res) => {
      handlers.onResponse(res);
      return res;
    });
