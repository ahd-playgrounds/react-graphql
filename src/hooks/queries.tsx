import { useQuery } from 'react-query';
import { ResJourneys } from '../../shared/types';

export const useJourneys = (token: string) =>
  useQuery<ResJourneys>('getJourneys', () =>
    fetch('/api/journeys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hello: token,
      }),
    }).then((res) => res.json())
  );
