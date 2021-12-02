import { ResJourneys } from '../../shared/types';

export type Fetcher = (params: {
  url: string;
  method: 'GET' | 'POST';
  headers: Record<string, string>;
  body: any;
}) => Promise<any>;

export interface SdkCstr {
  fetcher: Fetcher;
}

export default class Sdk {
  constructor(private params: SdkCstr) {}

  public journeys(): Promise<ResJourneys> {
    return this.params.fetcher({
      url: '/api/journeys',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hello: 'world',
      }),
    });
  }
}
